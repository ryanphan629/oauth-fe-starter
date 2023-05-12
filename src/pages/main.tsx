import { Box, Button, Image, Text } from '@chakra-ui/react'
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
      <Box display="block" marginTop={12}>
        <Image
          marginX="auto"
          src="https://github.githubassets.com/images/mona-loading-default.gif"
          alt="logo"
          className="w-96"
        />
        <Text className="text-center font-mono text-3xl text-cyan-600">
          React + Typescript + ChakraUI + TailwindCSS
        </Text>
      </Box>
    </div>
  )
}

export default Main
