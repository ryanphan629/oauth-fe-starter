import React from 'react'
import { Navigate } from 'react-router-dom'
import { toastError } from '../hooks/useAppToast'
import useAuth from '../hooks/useAuth'
import { Role } from '../types'

interface ProtectedProps {
  children: React.ReactNode
  role?: Role
}

const Protected: React.FC<ProtectedProps> = ({ children, role }) => {
  const { isAuthed, role: mustRole } = useAuth(state => state)

  if (role && role !== mustRole && mustRole !== 'ADMIN') {
    toastError('You are not authorized to view this page')
    return <Navigate to="/" />
  }

  if (!isAuthed) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}
export default Protected
