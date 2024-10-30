import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useCartStore } from "../utils/store";

const CartComponent = () => {
  const {products} =useCartStore();
  return (
    <TouchableOpacity
      onPress={() => router.push("/(root)/cart")}
      className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
    >
      <MaterialIcons
        name="shopping-cart"
        size={30}
        color={"black"}
        className="text-black relative"
      />
      <View className="w-7 h-7 bg-primary flex items-center justify-center rounded-full absolute top-0 right-0">
        <Text className="text-sm text-bold text-white">{products.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartComponent;
