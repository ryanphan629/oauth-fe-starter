import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

interface ProtectedProps {
  children: React.ReactNode
  roles?: string[]
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const { isAuthed } = useAuth(state => state)
  const navigate = useNavigate()

  if (!isAuthed) {
    navigate('/login ')
  }
  return <>{children}</>
}
export default Protected
