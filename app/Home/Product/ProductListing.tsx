import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const ProductListing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product Listing</Text>
      <Link href={"Home/Product/1"}> Go to Product Listing 1 LINK</Link>
      <Link href={"Home/Product/1?productName=Awesome+Gadget&price=100"}>
        Go to Product Listing 2 LINK
      </Link>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "Home/Product/[id]",
            params: {
              id: 2,
              productName: "Awesome Gadget",
              price: 100,
            }, // The dynamic route parameter
          });
        }}
      >
        <Text>Go to Product Listing 3 PRESSable</Text>
      </Pressable>

      <Link href={"Home/Dashboard"}>Go to Dashbaord</Link>
      <Link href={"Home/Product/Modal"}>Open Modal</Link>
      <Pressable
        onPress={() => {
          router.replace("Auth");
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProductListing;

const styles = StyleSheet.create({});
