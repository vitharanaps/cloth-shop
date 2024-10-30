import { View, Text } from "react-native";
import React, { useState } from "react";
import DashboardComponent from "./DashboardComponent";
import CartComponent from "./CartComponent";
import ProfileComponent from "./ProfileComponent";
import SearchComponent from "./SearchComponent";

const HeaderComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChangeSearchText = (text) => {
    setSearchTerm(text);
  };
  return (
    <View className="flex flex-col">
      <View className="flex flex-row w-full items-center justify-between">
        <DashboardComponent />
        <View className="flex flex-row gap-4 items-center justify-center">
          <CartComponent />
          <ProfileComponent />
        </View>
      </View>
      <Text className="text-2xl font-semibold tracking-wider my-3">
        Match Your Style
      </Text>
      <SearchComponent onChangeText={handleChangeSearchText} />
    </View>
  );
};

export default HeaderComponent;
