import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header: React.FC = () => {
  const { isAuthed, logout } = useAuth(state => state)

  return (
    <header className="flex w-full justify-between border-b bg-cyan-900 p-4 text-center font-mono text-2xl font-bold text-white">
      <Link to="/">OAuth Learning Starter</Link>
      {isAuthed && (
        <Button className=" bg-transparent text-cyan-900" onClick={logout}>
          Logout
        </Button>
      )}
    </header>
  )
}

export default Header
