import { create } from 'zustand'
import axiosConfig from '../../config/AxiosPlugin'
import { Role } from '../../types'

export interface UserDto {
  name: string
  email: string
  imageUrl: string
  provider: string
  role: Role
}

const fetchUserDto = async (): Promise<UserDto> => {
  const response = await axiosConfig.get('/private/user')
  return response.data.body
}

interface UserState {
  user: UserDto | null
  fetchUser: () => Promise<void>
  setUser: (user: UserDto) => void
}

export const useUser = create<UserState>(set => ({
  user: null,
  fetchUser: async () => {
    const user = await fetchUserDto()
    set({ user })
  },
  setUser: user => set({ user })
}))
