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

        {/* Botón de Login */}
        <Button title="Iniciar sesión" onPress={handleLogin} />

        {/* Botón de Registrar */}
        <Button title="Registrarse" onPress={handleRegister} />

        <View className="flex-row justify-between w-full">
          <CustomText variant="small" dark={true}>¿Olvidaste tu contraseña?</CustomText>
          <LinkText 
            text="Recuperar" 
            dark={false} 
            onPress={() => console.log("Navegar a recuperar")} 
          />
        </View>
      </View>
    </ImageBackground>
  );
}