import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useCartStore } from "../../../utils/store";
import CartProductCard from "../../../components/CartProductCard";
import { LinearGradient } from "expo-linear-gradient";

const Cart = () => {
  const { products } = useCartStore();
  return (
    <LinearGradient colors={["#FFD5D5", "#fff"]} className="h-[100vh]">
      <SafeAreaView className="w-[100vw] h-[100vh]">
        <ScrollView
          contentContainerStyle={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
          
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full h-full px-5 pt-4 pb-[90px]">
            {products?.map((product, index) => (
              <CartProductCard product={product} key={index} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cart;
