import { Stack } from "expo-router";

export function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name={"Home"} options={{ headerShown: false }} />
    </Stack>
  );
}
