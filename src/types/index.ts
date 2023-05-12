export interface LoginInfoDto {
  accessToken: string
  refreshToken: string
  role: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  email: string
  password: string
  name: string
  role: Role
}

export type Role = 'USER' | 'ADMIN' | 'MODERATOR'
