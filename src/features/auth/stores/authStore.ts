import { create } from 'zustand'
import { User } from '../types'

// Mock API call
const apiLogin = async (email: string, password: string) => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ id: '1', email: email })
    }, 300)
  })
}

// Mock API call
const apiLogout = async () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 300)
  })
}

export const useAuthStore = create<{
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}>((set) => ({
  user: null,
  login: async (email: string, password: string) => {
    const user = await apiLogin(email, password)
    set({ user })
  },
  logout: async () => {
    await apiLogout()
    set({ user: null })
  }
}))
