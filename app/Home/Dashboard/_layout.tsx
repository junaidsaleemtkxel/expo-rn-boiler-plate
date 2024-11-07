import { Stack } from "expo-router/stack";

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Dashboard", headerShown: true }}
      />
    </Stack>
  );
}
