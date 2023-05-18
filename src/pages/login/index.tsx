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
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAuth } from '../../services/auth.service'
import { toastError, toastSuccess } from '../../hooks/useAppToast'
import useAuth from '../../hooks/useAuth'
import { LoginDto } from '../../types'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
import { Logo } from './ProviderIcons'

export const Login = () => {
  const { login, isAuthed } = useAuth(state => state)
  const [loginDto, setLoginDto] = useState<LoginDto>({ email: '', password: '' })
  const navigate = useNavigate()

  if (isAuthed) {
    navigate('/')
  }

  const onInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDto({ ...loginDto, [name]: event.target.value })
  }

  const handleLogin = async () => {
    try {
      const response = await loginAuth(loginDto)
      login(response)
      toastSuccess('Logged in successfully')
    } catch (error: any) {
      const message = error.response?.data?.reason || 'An error occurred while logging in'
      toastError(message)
    }
  }

  return (
    <Container minH="100%" minW="100%" className="center-all" backgroundColor="#087ea4">
      <Stack
        backgroundColor="white"
        padding={{
          base: '8',
          md: '10'
        }}
        width="50%"
        borderRadius="lg"
        spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                <Link to="/register">Sign up</Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>

        {/* Form */}
        <Box>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={onInputChange('email')} value={loginDto.email} id="email" type="email" />
              </FormControl>
              <PasswordField onChange={onInputChange('password')} value={loginDto.password} />
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
                bg="#087ea4"
                color={'white'}
                _hover={{
                  bg: '#06b6d4'
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
