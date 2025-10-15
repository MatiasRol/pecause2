import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Button from "../components/ui/Button";
import CustomText from "../components/ui/CustomText";
import InputField from "../components/ui/InputField";
import LinkText from "../components/ui/LinkText";
import "../global.css";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [haIniciadoSesion, setHaIniciadoSesion] = useState(false);

  function handleLogin() {
    if (!haIniciadoSesion) {
      alert("Logeando");
      setHaIniciadoSesion(true);
      router.push('/(home)/principal');
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/SextoElemento.png")}
      style={styles.background}
      resizeMode="cover"
      imageStyle={styles.image}
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

        <View className="flex-row justify-between w-full mt-4">
          <CustomText variant="small" dark={true}>¿No tienes cuenta?</CustomText>
          <LinkText 
            text="Registrarse" 
            dark={true}
            onPress={() => router.push('/register')} 
          />
        </View>

        <View className="mt-2">
          <LinkText 
            text="¿Olvidaste tu contraseña?" 
            dark={true} 
            onPress={() => console.log("Recuperar contraseña")} 
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});