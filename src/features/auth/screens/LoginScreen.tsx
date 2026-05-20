import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { View } from 'react-native'

const LoginScreen = () => {
  return (
    <View className="h-full justify-center p-10 gap-6">
      <Text>LoginScreen</Text>
      <Input placeholder="Email" />
      <Input placeholder="Password" secureTextEntry />
      <Button onPress={() => {}}>
        <Text>Login</Text>
      </Button>
    </View>
  )
}

export default LoginScreen
