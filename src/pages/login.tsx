import { FcGoogle } from 'react-icons/fc'
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8080'
const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login('token-ne')
    navigate('/')
  }

  const handleGoogle = (_evt: any) => {
    window.location.href = GOOGLE_AUTH_URL
  }

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              onClick={handleLogin}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
          <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
            {/* Google */}
            <Button w={'full'} onClick={handleGoogle} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Login
