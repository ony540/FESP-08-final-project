import axios, { AxiosInstance } from 'axios'

axios.defaults.timeout = 2 * 1000

// Authorization 설정이 없는 일반 API Instance
export const baseInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
