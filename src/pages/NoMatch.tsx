import { Container, Text } from '@chakra-ui/react'

const NoMatch = () => {
  return (
    <Container h="100%" w="100%" className="center-all">
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
        404 Not Found
      </Text>
    </Container>
  )
}

export default NoMatch
