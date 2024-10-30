import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import HeaderComponent from "../../../components/HeaderComponent";
import { testProducts } from "../../../assets/tempData/data";
import ProductCard from "../../../components/ProductCard";
import { LinearGradient } from "expo-linear-gradient";
import { useCartStore } from "../../../utils/store";
import CartComponent from "../../../components/CartComponent";

const index = () => {
  const {products, totalItems, totalPrice, removeFromCart} = useCartStore()
  console.log(products,"products array")
  return (
    <LinearGradient colors={["#FFD5D5", "#fff"]} className="h-full">
      <SafeAreaView>
        <View className="mx-5 h-full flex flex-col">
          <FlatList
            ListHeaderComponent={() => <HeaderComponent />}
            data={testProducts}
            renderItem={({ item }) => <ProductCard item={item} />}
            numColumns={2}
            contentContainerStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default index;
