import { create } from 'zustand'
import { clearToken, getRole, getToken, storeRefreshToken, storeRole, storeToken } from '../config/StorageUtils'
import { LoginInfoDto, Role } from '../types'

interface AuthProps {
  login: (dto: LoginInfoDto) => void
  loginOAuth: (token: string) => void
  logout: () => void
  isAuthed: boolean
  role: Role
}

const handleLogin = async (dto: LoginInfoDto) => {
  const { accessToken, refreshToken, role } = dto
  storeToken(accessToken)
  storeRefreshToken(refreshToken)
  storeRole(role)
  useAuth.setState({ isAuthed: true, role: role as Role })
}

const handleLoginOAuth = async (token: string) => {
  storeToken(token)
  useAuth.setState({ isAuthed: true })
}

const useAuth = create<AuthProps>(set => ({
  isAuthed: false,
  role: 'USER',
  login: handleLogin,
  loginOAuth: handleLoginOAuth,
  logout: () => {
    clearToken()
    set({ isAuthed: false, role: undefined })
  }
}))

async function initState(): Promise<{ token: string | null; role: string | null }> {
  return {
    token: getToken(),
    role: getRole()
  }
}

initState()
  .then(({ token, role }) => {
    useAuth.setState({ isAuthed: !!token, role: role as Role })
  })
  .catch(error => {
    console.error(`Error creating and storing token: ${error}`)
  })

export default useAuth
