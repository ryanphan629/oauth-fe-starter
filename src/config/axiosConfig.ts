import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL || 'localhost:8080'

const axiosConfig = axios.create({
  baseURL: baseURL,
})

export default axiosConfig
