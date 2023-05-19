import { Avatar, Badge, Box, Button, Center, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRef } from 'react'
import { updateAvatar } from '../../services/upload.service'
import { UserDto, useUser } from './user.service'

const SocialProfile: React.FC<UserDto> = ({ imageUrl, name, email, role }) => {
  const inputUploadRef = useRef<HTMLInputElement>(null)
  const { setUser } = useUser(state => state)

  const onClickUpload = () => {
    inputUploadRef.current?.click()
  }

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      console.log(file)
      setTimeout(async () => {
        if (!file) return
        const response = await updateAvatar(file)
        setUser(response.body)
      }, 500)
    }
  }

  return (
    <Center py={6}>
      <Box
        maxW="320px"
        w="full"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        p="6"
        textAlign="center">
        <Stack position="relative" mb={4} width="fit-content" mx="auto" mt={2}>
          <Avatar size="2xl" src={imageUrl} border={'1px solid gray'} pos={'relative'} />
          <Text cursor="pointer" size="sm" as="i" onClick={onClickUpload}>
            Update avatar
          </Text>
          <input hidden ref={inputUploadRef} type="file" onChange={handleAvatarChange} />
        </Stack>

        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {email}
        </Text>
        <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
          Actress, musician, songwriter and artist.
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={2}>
          <Badge variant="outline" colorScheme="blue" fontWeight={'400'}>
            #{role}
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200'
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'}
            _hover={{
              bg: 'blue.500'
            }}
            _focus={{
              bg: 'blue.500'
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default SocialProfile
