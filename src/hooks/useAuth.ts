import { useEffect, useMemo, useState } from 'react'

interface IAuth {
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
}

export function useAuth(): IAuth {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('token'))

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    window.location.reload()
  }

  return useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [isAuthenticated, login, logout]
  )
}
