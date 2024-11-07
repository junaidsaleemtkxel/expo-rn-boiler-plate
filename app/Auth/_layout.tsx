import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="Login/LoginScreen" options={{ headerShown: false }} />
      <Stack.Screen
        name="Logout/LogoutScreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
