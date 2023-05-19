import axiosPlugin from '../../config/axios.plugin'
import { toastError, toastSuccess } from '../../hooks/useAppToast'
import { RegisterDto } from '../../types'

export async function register(data: RegisterDto): Promise<void> {
  try {
    await axiosPlugin.post('/auth/register', data)
    toastSuccess('Registration successful')
    setTimeout(() => {
      window.location.replace('/login')
    }, 1500)
  } catch (error: any) {
    const message = error.response?.data?.reason || 'An error occurred while logging in'
    toastError(message)
  }
}
