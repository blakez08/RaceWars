import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import AuthHeader from '../components/AuthHeader'
import AuthScreenContainer from '../components/AuthScreenContainer'

const ForgotPasswordScreen = () => {
  const router = useRouter()

  return (
    <AuthScreenContainer>
      <View>
        <AuthHeader
          title="Forgot password"
          subtitle="Enter your email to reset your password."
        />
      </View>

      <View className="gap-1">
        <Label nativeID="email-input" htmlFor="email-input">
          Email
        </Label>
        <Input id="email-input" placeholder="Email" />
      </View>

      <Button size="lg" onPress={() => {}}>
        <Text>Continue</Text>
      </Button>

      <View className="items-center">
        <Text className="text-md" onPress={() => router.navigate('/(auth)')}>
          Return to sign in
        </Text>
      </View>
    </AuthScreenContainer>
  )
}

export default ForgotPasswordScreen
