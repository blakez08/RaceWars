import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Text } from '@/components/ui/text'
import { View } from 'react-native'

const LoginScreen = () => {
  return (
    <View className="bg-background h-full justify-center p-6 gap-6">
      <View>
        <Text className="text-3xl font-bold">Welcome back</Text>
        <Text className="text-sm text-muted-foreground">
          Sign in to claim, defend, and compete.
        </Text>
      </View>

      <View>
        <Label nativeID="email-input" htmlFor="email-input">
          Email
        </Label>
        <Input id="email-input" placeholder="Email" />
      </View>

      <View>
        <Label nativeID="password-input" htmlFor="password-input">
          Password
        </Label>
        <Input id="password-input" placeholder="Password" secureTextEntry />
      </View>

      <Button size="lg" onPress={() => {}}>
        <Text>Sign in</Text>
      </Button>
    </View>
  )
}

export default LoginScreen
