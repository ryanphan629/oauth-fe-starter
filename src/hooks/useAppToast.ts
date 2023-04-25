import { useToast } from '@chakra-ui/react'

const POSITION = 'top-right'
const DURATION = 1500

export default function useAppToast() {
  const toast = useToast()

  const toastSuccess = (message: string) =>
    toast({
      title: message,
      position: POSITION,
      status: 'success',
      duration: DURATION,
      isClosable: true
    })

  const toastError = (message: string) =>
    toast({
      title: message,
      position: POSITION,
      status: 'error',
      duration: DURATION,
      isClosable: true
    })

  return {
    toastSuccess,
    toastError
  }
}
