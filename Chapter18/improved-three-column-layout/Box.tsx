import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Box({ children }: Props) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}
