import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAuth, LoginDto } from '../../hooks/auth.service'
import useAppToast from '../../hooks/useAppToast'
import useAuth from '../../hooks/useAuth'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import { Logo } from './ProviderIcons'

export const Login = () => {
  const { login, isAuthed } = useAuth(state => state)
  const [loginDto, setLoginDto] = useState<LoginDto>({ email: '', password: '' })
  const navigate = useNavigate()
  const { toastSuccess, toastError } = useAppToast()

  if (isAuthed) {
    navigate('/')
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDto({ ...loginDto, email: e.target.value })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDto({ ...loginDto, password: e.target.value })
  }

  const handleLogin = async () => {
    try {
      const response = await loginAuth(loginDto)
      const token = response.token
      login(token)
      toastSuccess('Logged in successfully')
    } catch (error: any) {
      const message = error.response?.data?.reason || 'An error occurred while logging in'
      toastSuccess(message)
    }
  }

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={handleEmailChange} value={loginDto.email} id="email" type="email" />
              </FormControl>
              <PasswordField onChange={handlePasswordChange} value={loginDto.password} />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
