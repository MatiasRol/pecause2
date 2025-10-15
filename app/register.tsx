import { router } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
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
      router.push("/(home)/principal");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/inicio.png")} // 💜 misma imagen que el Index
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <CustomText variant="large" dark={true}>
            Crear Cuenta
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
          <InputField
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            secureTextEntry
            onChangeText={setConfirmPassword}
          />

          <Button title="Registrarse" onPress={handleRegister} />

          <View className="flex-row justify-between w-full mt-4">
            <CustomText variant="small" dark={true}>
              ¿Ya tienes cuenta?
            </CustomText>
            <LinkText
              text="Iniciar sesión"
              dark={true}
              onPress={() => router.push("/")}
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
