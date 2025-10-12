import { router } from "expo-router";
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
      <Text>Mi primera Navegacion</Text>
      <View className="mt-6 w-full items-center">
        <Pressable onPress={() => router.push("/")}>
          <Text className="text-black">
            Regresar al Inicio
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsScreen;