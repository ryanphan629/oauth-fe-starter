import axios from 'axios'
import axiosPlugin from '../config/axios.plugin'

import GlobalConfig from '../config/global.config'

const { MEDIA_URL, BUCKET_NAME } = GlobalConfig

export const getPresignedUrl = async (file: File): Promise<string> => {
  const response = await axiosPlugin.get(`/profile/get-presigned-url?filename=${file.name}`)
  return response.data.body
}

export const uploadAvatar = async (url: string, file: File) => {
  try {
    const response = await axios.put(url, file, {
      headers: {
        'Content-Type': file.type
      }
    })
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}

export const updateAvatar = async (file: File) => {
  try {
    const url = await getPresignedUrl(file)
    await uploadAvatar(url, file)
    const avatarUrl = `${MEDIA_URL}/${BUCKET_NAME}/${file.name}`
    const response = await axiosPlugin.post('/profile/upload-avatar', { avatarUrl })
    return response.data
  } catch (error: any) {
    console.log(error.response.data)
  }
}
