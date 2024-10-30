import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const SearchComponent = ({onChangeText}) => {
  return (
    <View className="w-full h-[45px]  bg-white flex flex-row items-center gap-2 px-3 rounded-2xl mb-3">
     <FontAwesome name="search" size={20} color="gray" />
        <TextInput className="h-full text-xl" placeholder='Search....' onChangeText={onChangeText}/>
    </View>
  )
}

export default SearchComponent