import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const CartProductCard = ({ product }) => {
  return (
    <View className="w-full h-[150px] flex flex-row bg-white px-4 py-4 rounded-lg my-2">
      <View className="h-full w-1/3  overflow-hidden">
        <Image
          source={{ uri: product?.imageUrl }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          className="rounded-xl"
          onError={(e) => console.warn("Image failed to load", e)}
        />
      </View>
      {/* text container */}
      <View className="w-2/3 h-full flex flex-col pl-4  gap-3">
        <View className="flex flex-row justify-between">
          <Text className="text-xl font-bold" numberOfLines={1}>{product?.name}</Text>
          <View className="h-7 w-7">
            <AntDesign name="delete" size={24} color="red" />
          </View>
        </View>
        <Text className="text-xl font-semibold text-gray-500 "> $ {product?.price}</Text>
        <View className="flex flex-row gap-3 items-center">
        {product.color && (
          <View
            className=" h-7 w-7 rounded-full"
            style={{ backgroundColor: product?.color?.toLowerCase() }}
          ></View>
        )}
        {product.size && (
          <View className=" h-7 w-7 bg-white rounded-full flex items-center justify-center">
            <Text className="text-xl font-semibold ">{product.size}</Text>
          </View>
        )}
         {product.size && (
          <View className=" h-7 w-7  rounded-full flex items-center justify-center">
            <Text className="text-xl font-semibold text-gray-500">{product.quantity}</Text>
          </View>
        )}
        </View>
        <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-semibold ">Total</Text>
            <Text className="text-xl font-semibold ">{(product?.quantity * product.price).toFixed(2)}</Text>
        </View>
       
      </View>
    </View>
  );
};

export default CartProductCard;
