import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import { LoadingWrapper } from "./loading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "./router";

type Props = NativeStackScreenProps<Routes, "Second">;

const Second = ({ navigation }: Props) => (
  <LoadingWrapper>
    <View style={styles.container}>
      <Button title="First" onPress={() => navigation.navigate("First")} />
      <Button title="Third" onPress={() => navigation.navigate("Third")} />
    </View>
  </LoadingWrapper>
);

export default Second;
