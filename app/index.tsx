import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
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
      router.push("/(home)/principal");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/inicio.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <CustomText variant="large" dark={true}>
            Bienvenido
          </CustomText>

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
            <CustomText variant="small" dark={true}>
              ¿No tienes cuenta?
            </CustomText>
            <LinkText
              text="Registrarse"
              dark={true}
              onPress={() => router.push("/register")}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 30,
    borderRadius: 20,
    width: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
