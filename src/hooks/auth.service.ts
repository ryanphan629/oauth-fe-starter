import axiosConfig from '../config/AxiosPlugin'
import { LoginDto, LoginInfoDto } from '../types'

export const loginAuth = async ({ email, password }: LoginDto): Promise<LoginInfoDto> => {
  const response = await axiosConfig.post('/auth/login', {
    email,
    password,
  })
  return response.data.body
}
