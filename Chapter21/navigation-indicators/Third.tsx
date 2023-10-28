import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import { LoadingWrapper } from "./loading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "./router";

type Props = NativeStackScreenProps<Routes, "Third">;

const Third = ({ navigation }: Props) => (
  <LoadingWrapper>
    <View style={styles.container}>
      <Button title="First" onPress={() => navigation.navigate("First")} />
      <Button title="Second" onPress={() => navigation.navigate("Second")} />
    </View>
  </LoadingWrapper>
);

export default Third;
