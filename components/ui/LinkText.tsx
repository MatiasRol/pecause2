import React from "react";
import { Pressable } from "react-native";
import CustomText from "./CustomText";

interface LinkTextProps {
  text: string;
  onPress?: () => void;
  dark?: boolean;
}

const LinkText = ({ text, onPress, dark = false }: LinkTextProps) => {
  return (
    <Pressable onPress={onPress}>
      <CustomText variant="small" dark={dark}>{text}</CustomText>
    </Pressable>
  );
};

export default LinkText;