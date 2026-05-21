import { AUTH_TOKEN_KEY } from '@/api/api'
import * as SecureStore from 'expo-secure-store'
import { create } from 'zustand'
import authApi from '../api/authApi'
import { User } from '../types'

export const useAuthStore = create<{
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}>((set) => ({
  user: null,
  login: async (email: string, password: string) => {
    const { token } = await authApi.login(email, password)
    await SecureStore.setItemAsync(AUTH_TOKEN_KEY, token)
    const user = await authApi.getMe()
    set({ user })
  },
  logout: async () => {
    await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY)
    set({ user: null })
  }
}))
