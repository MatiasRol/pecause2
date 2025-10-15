import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen name="(home)" />
      <Stack.Screen 
        name="+not-found" 
        options={{ 
          title: "404 - Not Found",
          headerShown: true 
        }} 
      />
    </Stack>
  );
}