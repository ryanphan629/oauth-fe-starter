import { create } from 'zustand'
import { clearToken, getToken, storeToken } from '../config/StorageUtils'

interface AuthProps {
  login: (token: string) => void
  loginOAuth: (token: string) => void
  logout: () => void
  isAuthed: boolean
}

const handleLogin = async (token: string) => {
  storeAuth(token)
    .then(() => {
      useAuth.setState({ isAuthed: true })
    })
    .catch(error => {
      console.error(`Error creating and storing token: ${error}`)
    })
}

const handleLoginOAuth = async (token: string) => {
  storeAuth(token)
    .then(() => {
      useAuth.setState({ isAuthed: true })
    })
    .catch(error => {
      console.error(`Error creating and storing token: ${error}`)
    })
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

async function storeAuth(token: string): Promise<boolean> {
  storeToken(token)
  return true
}

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
