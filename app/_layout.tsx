import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Bienvenido",
          headerShown: false  // Sin header en el index
        }} 
      />
      <Stack.Screen 
        name="(home)" 
        options={{ 
          headerShown: false  // El grupo (home) maneja sus propios headers
        }} 
      />
    </Stack>
  );
}