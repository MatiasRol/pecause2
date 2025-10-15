import React from "react";
import { Pressable, StyleSheet } from "react-native";
import CustomText from "./CustomText";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <CustomText variant="medium" dark={true}>
        {title}
      </CustomText>
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
    backgroundColor: "#9b5de5",
  },
});

export default Button;
