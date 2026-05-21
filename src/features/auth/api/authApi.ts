import api from '@/api/api'
import { LoginResponse, User } from '../types'

const login = (email: string, password: string) =>
  api.post<LoginResponse>('/auth/login', { email, password })

const logout = () => api.post('/auth/logout')

const getMe = () => api.get<User>('/auth/me')

export default { login, logout, getMe }
