import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getRefreshToken, getToken, storeRefreshToken, storeToken } from './StorageUtils'

const baseURL = process.env.REACT_APP_API_URL || 'localhost:8080'

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Fetch new access token
const fetchAccessToken = async () => {
  try {
    const response = await instance.post('/auth/refresh', {
      refreshToken: getRefreshToken(),
    })
    const { accessToken, refreshToken } = response.data.body
    storeRefreshToken(refreshToken)
    storeToken(accessToken)
    return accessToken
  } catch (error) {
    console.error(error)
  }
}

const onConfig = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
}

const onResponse = (response: AxiosResponse) => {
  return response
}

const onError = async (error: any) => {
  if (axios.isAxiosError(error) && error.response?.status === 401) {
    const config = error.config as AxiosRequestConfig
    return fetchAccessToken().then((token: string) => {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      }
      return instance.request(config)
    })
  }
  return Promise.reject(error)
}

instance.interceptors.request.use(onConfig, onError)
instance.interceptors.response.use(onResponse, onError)

export default instance
