import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary w-[100%] h-[60px] rounded-lg flex justify-center items-center ring-2 ring-red-600"
    >
      <Text className="text-xl text-white font-semibold tracking-wider">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
