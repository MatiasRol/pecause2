import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import Button from "../components/ui/Button";
import CustomText from "../components/ui/CustomText";
import InputField from "../components/ui/InputField";
import LinkText from "../components/ui/LinkText";
import "../global.css";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haIniciadoSesion, setHaIniciadoSesion] = useState(false);
  const [seHaRegistrado, setSeHaRegistrado] = useState(false);

  function handleLogin() {
    if (!haIniciadoSesion) {
      alert("Logeando");
      setHaIniciadoSesion(true);
      router.push('/(home)/principal');  // Navegar a home/principal
    }
  }

  function handleRegister() {
    if (!seHaRegistrado) {
      alert("Registrando");
      setSeHaRegistrado(true);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/SextoElemento.png")}
      className="w-screen h-screen flex justify-start items-center pt-20"
      resizeMode="cover"
    >
      <View className="bg-black/50 p-10 rounded-2xl w-80 items-center shadow-xl">
        <CustomText variant="large" dark={true}>Bienvenido</CustomText>

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

        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button title="Registrarse" onPress={handleRegister} />

        <View className="flex-row justify-between w-full">
          <CustomText variant="small" dark={true}>¿Olvidaste tu contraseña?</CustomText>
          <LinkText 
            text="Recuperar" 
            dark={false} 
            onPress={() => console.log("Navegar a recuperar")} 
          />
        </View>

        {/* Link para ir a Home */}
        <View className="mt-6 w-full items-center">
          <LinkText 
            text="Ir a Home" 
            dark={true} 
            onPress={() => router.push('/(home)/principal')} 
          />
        </View>
      </View>
    </ImageBackground>
  );
}