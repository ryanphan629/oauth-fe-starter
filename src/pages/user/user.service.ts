import axiosConfig from '../../config/AxiosPlugin'
import { Role } from '../../types'

export interface UserDto {
  name: string
  email: string
  imageUrl: string
  provider: string
  role: Role
}

export const fetchUserDto = async (): Promise<UserDto> => {
  const response = await axiosConfig.get('/private/user')
  return response.data.body
}
