import { View, Text, useWindowDimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from "expo-router";
const ProductCard = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{ width: (width - 60) / 2 }}
      className=" h-[250px] mx-3 my-2 rounded-lg overflow-hidden w-full"
      onPress={()=>router.push(`/(product)/${item.id}`)}
    >
      {/* Image Container */}
      <Image
        source={{ uri: item.image_url }}
        resizeMode="cover"
        className="w-full h-3/4 flex items-center justify-center rounded-lg relative"
      />
      <View className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute right-2 top-3">
      <MaterialIcons name="favorite-border" size={30} color="#ff8080" />
            </View>
      {/* Text Container */}
      <View className="flex flex-col gap-1 mt-3">
        <Text className="text-lg font-semibold" numberOfLines={1}>{item.name}</Text>
        <View className="flex flex-row items-center justify-between ">
          <Text className="text-lg font-bold text-gray-500">
            $ {item.price}
          </Text>
          <View className="flex flex-row items-center justify-center gap-1">
            <FontAwesome name="star" size={16} color="#ca8a04" />
            <Text className="text-sm text-gray-500 ">(4)</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
