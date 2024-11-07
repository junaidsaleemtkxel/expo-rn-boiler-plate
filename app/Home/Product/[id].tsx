import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useRoute } from "@react-navigation/native";

const ProductDetail = () => {
  const params = useLocalSearchParams();
  console.info("ProductDetail", params);
  return (
    <View>
      <Text>ProductDetail ID - {params?.id} </Text>
      <Text>ProductDetail Name - {params?.productName} </Text>
      <Text>ProductDetail Price - {params?.price} </Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
