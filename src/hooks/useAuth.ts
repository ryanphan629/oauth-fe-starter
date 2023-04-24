import { create } from 'zustand'
import { clearToken, getToken, storeRefreshToken, storeToken } from '../config/StorageUtils'
import { LoginInfoDto } from './auth.service'

interface AuthProps {
  login: (dto: LoginInfoDto) => void
  loginOAuth: (token: string) => void
  logout: () => void
  isAuthed: boolean
}

const handleLogin = async (dto: LoginInfoDto) => {
  const { accessToken, refreshToken } = dto
  storeToken(accessToken)
  storeRefreshToken(refreshToken)
  useAuth.setState({ isAuthed: true })
}

const handleLoginOAuth = async (token: string) => {
  storeToken(token)
  useAuth.setState({ isAuthed: true })
}

const useAuth = create<AuthProps>(set => ({
  isAuthed: false,
  login: handleLogin,
  loginOAuth: handleLoginOAuth,
  logout: () => {
    clearToken()
    set({ isAuthed: false })
  },
}))

async function initState(): Promise<string | null> {
  return getToken()
}

initState()
  .then(token => {
    useAuth.setState({ isAuthed: !!token })
  })
  .catch(error => {
    console.error(`Error creating and storing token: ${error}`)
  })

export default useAuth
