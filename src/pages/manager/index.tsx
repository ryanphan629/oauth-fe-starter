import { Box, Text } from '@chakra-ui/react'

const ManagerBoard: React.FC = () => {
  return (
    <Box width="full" display="flex" justifyContent="center" alignItems="center">
      <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
        Welcome to Manager Board
      </Text>
    </Box>
  )
}

export default ManagerBoard
