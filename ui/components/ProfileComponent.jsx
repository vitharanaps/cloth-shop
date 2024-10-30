import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileComponent = () => {
  return (
    <View className="w-[50px] h-[50px] bg-white rounded-full flex overflow-hidden items-center justify-center">
    <Image
      source={require("../assets/img/profile.jpg")}
      className="w-full h-full overflow-hidden"
      resizeMode="cover"
    />
  </View>
  )
}

export default ProfileComponent