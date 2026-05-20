import { useAuthStore } from '@/features/auth/stores/authStore'
import { NAV_THEME } from '@/lib/theme'
import { ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import '../global.css'

const Layout = () => {
  const authStore = useAuthStore()
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider
      value={colorScheme === 'dark' ? NAV_THEME.dark : NAV_THEME.light}
    >
      <Stack>
        <Stack.Protected guard={authStore.user !== null}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={authStore.user === null}>
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: false, navigationBarHidden: true }}
          />
        </Stack.Protected>
      </Stack>
    </ThemeProvider>
  )
}

export default Layout
