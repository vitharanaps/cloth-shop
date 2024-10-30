import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProductLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#fff" },
          headerBackTitleVisible:false,
        }}
      />
        <Stack.Screen
        name="cart"
        options={{
          title:"My Cart",
          headerShown: true,
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
          headerTitleStyle: { color: "#000" },
          headerBackTitleVisible:false,
        }}
      />
    </Stack>
  );
};

export default ProductLayout;
