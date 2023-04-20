import axios from 'axios'
import { getToken } from './StorageUtils'

const baseURL = process.env.REACT_APP_API_URL || 'localhost:8080'

const axiosConfig = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosConfig.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

export default axiosConfig
