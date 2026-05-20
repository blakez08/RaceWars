import '../global.css'
import { ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'
import { NAV_THEME } from '@/lib/theme'

const getAuth = () => {
  return 'unauthed'
}

const Layout = () => {
  const status = getAuth()
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? NAV_THEME.dark : NAV_THEME.light}>
      <Stack>
        <Stack.Protected guard={status === 'authed'}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={status === 'unauthed'}>
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
