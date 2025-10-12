import { router, Stack } from "expo-router";
import { Pressable, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Bienvenido",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable 
              onPress={() => router.push('/principal')}
              style={{ marginRight: 15 }}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>HOME</Text>
            </Pressable>
          ),
        }} 
      />
      <Stack.Screen 
        name="Home" 
        options={{ 
          title: "Home",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
    </Stack>
  );
}