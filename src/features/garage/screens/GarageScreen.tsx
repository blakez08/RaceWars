import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/features/auth/stores/authStore'
import { Text, View } from 'react-native'

const GarageScreen = () => {
  const logout = useAuthStore().logout
  return (
    <View>
      <Text>GarageScreen</Text>
      <Button onPress={logout}>
        <Text>Logout</Text>
      </Button>
    </View>
  )
}

export default GarageScreen
