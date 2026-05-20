// Keep these values in sync with src/global.css :root and the prefers-color-scheme: dark block.
import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native'

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: '#faf9f5',
      border: 'hsl(40 10% 86%)',
      card: '#ffffff',
      notification: 'hsl(0 60% 41%)',
      primary: '#30302e',
      text: '#30302e'
    }
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: '#30302e',
      border: '#4a4a46',
      card: '#262624',
      notification: 'hsl(0 75% 76%)',
      primary: '#faf9f5',
      text: '#ffffff'
    }
  }
}
