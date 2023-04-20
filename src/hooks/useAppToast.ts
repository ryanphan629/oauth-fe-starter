import { useToast } from '@chakra-ui/react'

export default function useAppToast() {
  const toast = useToast()

  const toastSuccess = (message: string) =>
    toast({
      title: message,
      variant: 'left-accent',
      position: 'top-right',
      status: 'success',
      duration: 500,
    })

  const toastError = (message: string) =>
    toast({
      title: message,
      variant: 'left-accent',
      position: 'top-right',
      status: 'error',
    })

  return {
    toastSuccess,
    toastError,
  }
}
