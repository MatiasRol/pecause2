import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

interface CustomTextProps {
  variant: "small" | "medium" | "large";
  dark: boolean;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>; // Agregamos esta línea
}

const CustomText = ({ variant, dark, children, style }: CustomTextProps) => {
  const fontSize = variant === "small" ? 14 : variant === "medium" ? 18 : 24;
  const color = dark ? "#fff" : "#000";

  return (
    <Text style={[{ fontSize, color, fontWeight: "500" }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;