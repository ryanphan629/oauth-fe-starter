import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NAV = [
  {
    id: 1,
    name: 'User',
    path: '/user'
  },
  {
    id: 2,
    name: 'Admin',
    path: '/admin'
  },
  {
    id: 3,
    name: 'Manager',
    path: '/manager'
  }
]

const Main = () => {
  return (
    <div className="w-full p-4 text-center">
      {NAV.map(({ id, name, path }) => (
        <Button key={id} px="10" mx="5" colorScheme="blue" size="md" variant="link">
          <Link to={path}>{name}</Link>
        </Button>
      ))}
      <h1 className="font-mono text-3xl text-red-600">Main</h1>
    </div>
  )
}

export default Main
