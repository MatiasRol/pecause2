import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import "../global.css";
import CustomText from "../components/ui/CustomText";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import LinkText from "../components/ui/LinkText";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Registrar con:", email, password);
  };

  return (
    <ImageBackground
      source={require("../assets/images/SextoElemento.png")}
      className="w-screen h-screen flex justify-start items-center pt-20"
      resizeMode="cover"
    >
      <View className="bg-black/50 p-10 rounded-2xl w-80 items-center shadow-xl">
        <CustomText variant="large" dark={true}>Registrarse</CustomText>

        <InputField placeholder="Correo electrónico" value={email} onChangeText={setEmail} />
        <InputField placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} />

        <Button title="Crear cuenta" onPress={handleSignUp} />

        <View className="flex-row justify-between w-full">
          <CustomText variant="small" dark={true}>¿Ya tienes una cuenta?</CustomText>
          <LinkText text="Inicia sesión" dark={false} onPress={() => console.log("Navegar a login")} />
        </View>
      </View>
    </ImageBackground>
  );
}