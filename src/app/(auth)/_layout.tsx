import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ header: () => null }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="create-account" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="change-password" />
    </Stack>
  )
}

export default AuthLayout
