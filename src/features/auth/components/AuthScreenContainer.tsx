import { View } from 'react-native'

const AuthScreenContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-background h-full justify-center p-6 gap-6">
      {children}
    </View>
  )
}

export default AuthScreenContainer
