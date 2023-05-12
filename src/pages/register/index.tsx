import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { RegisterDto, Role } from '../../types'
import { PasswordField } from '../login/PasswordField'
import { Logo } from '../login/ProviderIcons'
import { register } from './register.service'

export const Register = () => {
  const { isAuthed } = useAuth(state => state)
  const [registerDto, setRegisterDto] = useState<RegisterDto>({ email: '', password: '', name: '', role: 'USER' })
  const navigate = useNavigate()

  if (isAuthed) {
    navigate('/')
  }

  const onInputChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterDto({ ...registerDto, [name]: event.target.value })
  }

  const onRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegisterDto({ ...registerDto, role: event.target.value as Role })
  }

  const handleRegister = async () => {
    register(registerDto)
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
            <Heading size={{ base: 'xs', md: 'sm' }}>Create a new account</Heading>
          </Stack>
        </Stack>
        <Box>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input onChange={onInputChange('name')} value={registerDto.name} id="name" type="text" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={onInputChange('email')} value={registerDto.email} id="email" type="email" />
              </FormControl>
              <PasswordField onChange={onInputChange('password')} value={registerDto.password} />
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Select defaultValue="USER" onChange={onRoleChange} value={registerDto.role} placeholder="Select role">
                  <option value="USER">User</option>
                  <option value="MODERATOR">Moderator</option>
                  <option value="ADMIN">Administrator</option>
                </Select>
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button
                onClick={handleRegister}
                bg="#087ea4"
                color={'white'}
                _hover={{
                  bg: '#06b6d4'
                }}>
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
