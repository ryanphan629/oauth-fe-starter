import { Box, Text } from '@chakra-ui/react'

const AdminBoard: React.FC = () => {
  return (
    <Box width="full" paddingY="15" display="flex" justifyContent="center" alignItems="center">
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
        Welcome to Admin Board
      </Text>
    </Box>
  )
}

export default AdminBoard
