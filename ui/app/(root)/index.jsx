import { View, Text } from 'react-native'
import React from 'react'
import TestComponent from '../../components/TestComponent'

const index = () => {
  return (
    <View>
      <Text className="text-red-600">index</Text>
      <TestComponent  />
    </View>
  )
}

export default index