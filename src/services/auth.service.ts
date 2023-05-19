import axiosConfig from '../config/axios.plugin'
import { LoginDto, LoginInfoDto } from '../types'

export const loginAuth = async ({ email, password }: LoginDto): Promise<LoginInfoDto> => {
  const response = await axiosConfig.post('/auth/login', {
    email,
    password
  })
  return response.data.body
}
