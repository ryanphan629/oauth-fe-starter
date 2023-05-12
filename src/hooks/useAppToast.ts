import { createStandaloneToast } from '@chakra-ui/react'

const { toast } = createStandaloneToast()
const POSITION = 'top-right'
const DURATION = 1500

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

export { toastSuccess, toastError }
