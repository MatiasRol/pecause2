import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import Button from "../components/ui/Button";
import CustomText from "../components/ui/CustomText";
import InputField from "../components/ui/InputField";
import LinkText from "../components/ui/LinkText";
import "../global.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [seHaRegistrado, setSeHaRegistrado] = useState(false);

  function handleRegister() {
    if (!seHaRegistrado) {
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      alert("Registrando");
      setSeHaRegistrado(true);
      router.push('/(home)/principal');
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/SextoElemento.png")}
      className="w-screen h-screen flex justify-start items-center pt-20"
      resizeMode="cover"
    >
      <View className="bg-black/50 p-10 rounded-2xl w-80 items-center shadow-xl">
        <CustomText variant="large" dark={true}>Crear Cuenta</CustomText>

        <InputField 
          placeholder="Correo electrónico" 
          value={email} 
          onChangeText={setEmail} 
        />
        <InputField 
          placeholder="Contraseña" 
          value={password} 
          secureTextEntry 
          onChangeText={setPassword} 
        />
        <InputField 
          placeholder="Confirmar contraseña" 
          value={confirmPassword} 
          secureTextEntry 
          onChangeText={setConfirmPassword} 
        />

        <Button title="Registrarse" onPress={handleRegister} />

        <View className="flex-row justify-between w-full mt-4">
          <CustomText variant="small" dark={true}>¿Ya tienes cuenta?</CustomText>
          <LinkText 
            text="Iniciar sesión" 
            dark={true}  // Cambiado a true para que sea blanco
            onPress={() => router.push('/')} 
          />
        </View>
      </View>
    </ImageBackground>
  );
}