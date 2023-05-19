import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { clearToken, getRefreshToken, getToken, storeRefreshToken, storeRole, storeToken } from './storage.utils'

const baseURL = process.env.REACT_APP_API_URL || 'localhost:8080'

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Fetch new access token
const fetchAccessToken = async () => {
  const response = await instance.post('/auth/refresh', {
    refreshToken: getRefreshToken()
  })
  const { accessToken, refreshToken, role } = response.data.body
  storeToken(accessToken)
  storeRefreshToken(refreshToken)
  storeRole(role)
  return accessToken
}

const onConfig = (config: InternalAxiosRequestConfig<any>) => {
  if (getToken()) config.headers.Authorization = `Bearer ${getToken()}`
  return config
}

const onResponse = (response: AxiosResponse) => {
  return response
}

const onError = async (error: unknown) => {
  if (axios.isAxiosError(error) && error.response?.status === 401) {
    const config = error.config as AxiosRequestConfig

    if (config.url === '/auth/refresh') {
      console.error('Unauthorized. Must be login again.')
      clearToken()
      window.location.href = '/login'
      return Promise.reject(error)
    }

    return fetchAccessToken().then((token: string) => {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`
      }
      return instance.request(config)
    })
  }
  return Promise.reject(error)
}

instance.interceptors.request.use(onConfig, onError)
instance.interceptors.response.use(onResponse, onError)

export default instance
