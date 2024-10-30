import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { testProducts } from "../../../assets/tempData/data";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../../../components/HeaderComponent";
import CustomButton from "../../../components/CustomButton";
import { useCartStore } from "../../../utils/store";

const ProductDetailsPage = () => {
  const { id } = useLocalSearchParams();
  const product = testProducts.find((p) => p.id === id) || testProducts[0];
const {addToCart} = useCartStore();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const availableSizes = product.has_variants && [
    ...new Set(product.variants.map((variant) => variant.size)),
  ];

  const availableColors = selectedSize
    ? product.variants
        .filter((variant) => variant.size === selectedSize)
        .map((variant) => variant.color)
    : product.has_variants && [
        ...new Set(product.variants.map((variant) => variant.color)),
      ];

  const sizesForSelectedColor = selectedColor
    ? product.variants
        .filter((variant) => variant.color === selectedColor)
        .map((variant) => variant.size)
    : availableSizes;

  const selectedVariant =
    product.has_variants &&
    product.variants.find(
      (variant) =>
        variant.size === selectedSize && variant.color === selectedColor
    );

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSelectedColor(null);
    setQuantity(1);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    if (product.has_variants) {
      if (selectedVariant && quantity < selectedVariant.stock) {
        setQuantity(quantity + 1);
      }
    } else if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product.has_variants && (!selectedSize || !selectedColor)) {
      Alert.alert("Selection Error", "Please select both size and color.");
      return;
    }
    if (
      product.has_variants &&
      selectedVariant &&
      selectedVariant.stock < quantity
    ) {
      Alert.alert("Stock Error", "Quantity exceeds available stock.");
      return;
    } else if (!product.has_variants && product.stock < quantity) {
      Alert.alert("Stock Error", "Quantity exceeds available stock.");
      return;
    }

    const cartItem = {
      productId: product.id,
      name: product.name,
      price: selectedVariant ? selectedVariant.price : product.price,
      imageUrl: product.image_url,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    };
addToCart(cartItem)
    
  };


  return (
    <LinearGradient colors={["#FFD5D5", "#fff"]} className="h-[100vh]">
      <ScrollView
        contentContainerStyle={{ height: "100vh", width: "100vw" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-[100vh] flex flex-col">
          <Image
            source={{ uri: product.image_url }}
            className="w-full h-[40%]"
            resizeMode="cover"
            onError={(e) => console.warn("Image failed to load", e)}
          />

          <View className="flex flex-col mx-5 gap-5 mt-5">
            <View className="flex flex-row justify-between">
              <Text className="text-2xl font-semibold tracking-wider">
                {product.name}
              </Text>
              <Text className="text-xl font-semibold text-gray-500">
                ${selectedVariant ? selectedVariant.price : product.price}
              </Text>
            </View>

            <View className="flex">
              <Text className="text-lg text-justify">
                {product.description}
              </Text>
            </View>

            {product.has_variants ? (
              <>
                <View className="flex flex-col gap-2">
                  <Text className="text-xl font-semibold text-gray-700">
                    Size
                  </Text>
                  <View className="flex gap-5 flex-row">
                    {availableSizes.map((size) => (
                      <TouchableOpacity
                        key={size}
                        onPress={() => handleSizeSelect(size)}
                        className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                          selectedSize === size
                            ? "bg-blue-500"
                            : "bg-white border-2 border-gray-200"
                        }`}
                        disabled={!sizesForSelectedColor.includes(size)}
                      >
                        <Text
                          className={`text-lg font-bold ${
                            selectedSize === size
                              ? "text-white"
                              : "text-gray-500"
                          }`}
                        >
                          {size}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View className="flex flex-col gap-2">
                  <Text className="text-xl font-semibold text-gray-700">
                    Color
                  </Text>
                  <View className="flex gap-5 flex-row">
                    {availableColors.map((color) => (
                      <TouchableOpacity
                        key={color}
                        onPress={() => handleColorSelect(color)}
                        className={`w-[40px] h-[40px] rounded-full flex items-center justify-center ${
                          selectedColor === color
                            ? "border-2 border-blue-500"
                            : "border-2 border-gray-200"
                        }`}
                        disabled={!availableColors.includes(color)}
                      >
                        <View
                          style={{ backgroundColor: color.toLowerCase() }}
                          className="w-[30px] h-[30px] rounded-full"
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </>
            ) : (
              <Text className="text-lg font-semibold text-gray-700">
                In Stock: {product.stock}
              </Text>
            )}

            <View className="flex flex-col gap-2">
              <Text className="text-xl font-semibold text-gray-700">
                Quantity
              </Text>
              <View className="flex items-center gap-5 flex-row">
                <TouchableOpacity
                  disabled={quantity === 1}
                  onPress={decrementQuantity}
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    quantity === 1 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <Text className="text-xl font-bold">-</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold">{quantity}</Text>
                <TouchableOpacity
                  onPress={incrementQuantity}
                  disabled={
                    product.has_variants
                      ? quantity >= selectedVariant?.stock
                      : quantity >= product.stock
                  }
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    (
                      product.has_variants
                        ? quantity >= selectedVariant?.stock
                        : quantity >= product.stock
                    )
                      ? "bg-gray-200"
                      : "bg-white"
                  }`}
                >
                  <Text className="text-xl font-bold">+</Text>
                </TouchableOpacity>
              </View>
              {selectedVariant && quantity > selectedVariant.stock && (
                <Text className="text-red-500 text-sm">
                  Only {selectedVariant.stock} in stock
                </Text>
              )}
              {!product.has_variants && quantity > product.stock && (
                <Text className="text-red-500 text-sm">
                  Only {product.stock} in stock
                </Text>
              )}
            </View>

            <View className="w-full flex justify-center items-center">
              <CustomButton text="Add To Cart" onPress={handleAddToCart} />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsPage;
