import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const DashboardComponent = () => {
  return (
    <View className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
    <MaterialIcons
      name="dashboard"
      size={30}
      color={"#ff8080"}
      className="text-primary"
    />
  </View>
  )
}

export default DashboardComponent