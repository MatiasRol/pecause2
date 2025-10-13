import { Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="principal" 
        options={{ 
          title: "Principal",
          headerShown: true,
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => null,  // Oculta el botón de volver
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <Pressable 
                onPress={() => router.push('/(home)/profile')}
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>👤 Perfil</Text>
              </Pressable>
              <Pressable 
                onPress={() => router.push('/(home)/SettingsScreen')}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>⚙️ Config</Text>
              </Pressable>
            </View>
          ),
        }} 
      />
      <Stack.Screen 
        name="profile" 
        options={{ 
          title: "Perfil",
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
      <Stack.Screen 
        name="SettingsScreen" 
        options={{ 
          title: "Configuración",
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