import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header: React.FC = () => {
  const { isAuthed, logout } = useAuth(state => state)

  return (
    <header className="flex w-full items-center justify-between border-b bg-[#087ea4] p-4 text-center font-mono text-2xl font-bold text-white">
      <Link to="/">OAuth Learning Starter</Link>
      {isAuthed && (
        <Button
          size="sm"
          variant="ghost"
          _hover={{ backgroundColor: 'rgb(255,255,255,0.1)' }}
          _focus={{ outline: 'none', backgroundColor: 'transparent' }}
          onClick={logout}>
          Logout
        </Button>
      )}
    </header>
  )
}

export default Header
