import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme } from 'react-native'

const TabLayout = () => {
  const colorScheme = useColorScheme()
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="race" options={{ title: 'Race' }} />
        <Tabs.Screen name="podium" options={{ title: 'Podium' }} />
        <Tabs.Screen name="runs" options={{ title: 'Runs' }} />
        <Tabs.Screen name="garage" options={{ title: 'Garage' }} />
      </Tabs>
    </ThemeProvider>
  )
}

export default TabLayout
