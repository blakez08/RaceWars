import { View } from 'react-native'
import { Text } from '@/components/ui/text'

const AuthHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View>
      <Text className="text-3xl font-bold">{title}</Text>
      <Text className="text-sm text-muted-foreground">{subtitle}</Text>
    </View>
  )
}

export default AuthHeader
