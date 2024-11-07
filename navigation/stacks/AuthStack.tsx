import { Stack } from "expo-router";

export const AuthStack = () => {
  return (
    <Stack>
      <Stack.Screen name="Auth" options={{ headerShown: false }} />
    </Stack>
  );
};
