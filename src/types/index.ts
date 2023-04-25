export interface LoginInfoDto {
  accessToken: string
  refreshToken: string
  role: string
}

export interface LoginDto {
  email: string
  password: string
}

export type Role = 'ROLE_USER' | 'ROLE_ADMIN' | 'ROLE_MODERATOR'
