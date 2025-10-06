import React from "react";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: "red" | "blue";
}

const Button = ({ title, onPress, color = "red" }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, color === "red" ? styles.red : styles.blue]}
    >
      <CustomText variant="medium" dark={true}>{title}</CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  red: {
    backgroundColor: "#DC2626", // rojo
  },
  blue: {
    backgroundColor: "#2563EB", // azul
  },
});

export default Button;