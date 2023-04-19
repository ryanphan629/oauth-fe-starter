import { Button } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'

const Main = () => {
  const { logout } = useAuth()
  return (
    <>
      <h1 className="font-mono text-3xl text-red-600">Main</h1>
      <Button onClick={logout}>Logout</Button>
    </>
  )
}

export default Main
