import axiosConfig from '../../config/AxiosPlugin'

export interface UserDto {
  name: string
  email: string
  imageUrl: string
}

export const fetchUserDto = async (): Promise<UserDto> => {
  const response = await axiosConfig.get('/private/user')
  return response.data.body
}
