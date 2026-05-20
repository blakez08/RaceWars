import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import AuthHeader from '../components/AuthHeader'
import AuthScreenContainer from '../components/AuthScreenContainer'
import { useAuthStore } from '../stores/authStore'

const LoginScreen = () => {
  const router = useRouter()
  const login = useAuthStore().login

  const handleLogin = () => {
    login('blake@test.com', 'password')
  }

  return (
    <AuthScreenContainer>
      <View>
        <AuthHeader
          title="Welcome back"
          subtitle="Sign in to claim, defend, and compete."
        />
      </View>

      <View className="gap-1">
        <Label nativeID="email-input" htmlFor="email-input">
          Email
        </Label>
        <Input id="email-input" placeholder="Email" />
      </View>

      <View className="gap-1">
        <View className="flex-row justify-between">
          <Label nativeID="password-input" htmlFor="password-input">
            Password
          </Label>
          <Text
            className="text-md"
            onPress={() => router.navigate('/(auth)/forgot-password')}
          >
            Forgot your password?
          </Text>
        </View>
        <Input id="password-input" placeholder="Password" secureTextEntry />
      </View>

      <Button size="lg" onPress={handleLogin}>
        <Text>Sign in</Text>
      </Button>

      <View className="items-center">
        <Text
          className="text-md"
          onPress={() => router.navigate('/(auth)/create-account')}
        >
          Don't have an account? Sign up
        </Text>
      </View>
    </AuthScreenContainer>
  )
}

export default LoginScreen
