import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface InputFieldProps {
  placeholder: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
}

const InputField = ({ placeholder, value, secureTextEntry = false, onChangeText }: InputFieldProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#d1d5db", // gray-300
    marginBottom: 16,
  },
});

export default InputField;