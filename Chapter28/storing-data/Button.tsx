import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
