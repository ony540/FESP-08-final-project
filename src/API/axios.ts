import axios, { AxiosInstance } from 'axios'

axios.defaults.timeout = 2 * 1000

export const baseInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
