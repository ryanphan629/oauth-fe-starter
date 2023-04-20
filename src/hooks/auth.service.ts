import axiosConfig from '../config/AxiosPlugin'

export interface LoginInfoDto {
  token: string
}

export interface LoginDto {
  email: string
  password: string
}

export const loginAuth = async ({ email, password }: LoginDto): Promise<LoginInfoDto> => {
  const response = await axiosConfig.post('/auth/login', {
    email,
    password,
  })
  return response.data.body
}
