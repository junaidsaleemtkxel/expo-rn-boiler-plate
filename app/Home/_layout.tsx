import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

export default function ProductLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Product/ProductListing"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product/[id]"
        options={{ title: "Product Detail", headerShown: true }}
      />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
    </Stack>
  );
}
