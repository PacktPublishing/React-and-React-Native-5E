import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function ({ route }: Props) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{title}</Text>
    </View>
  );
}
