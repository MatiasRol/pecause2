import { View, Text, Pressable } from 'react-native';
import { router } from "expo-router";

const Index = () => {
  return (
    <View>
      <View className="mt-6 w-full items-center">
        <Pressable onPress={() => router.push('/SettingsScreen')}>
          <Text className="text-black">
            ⚙️ Ir a Configuración
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Index;