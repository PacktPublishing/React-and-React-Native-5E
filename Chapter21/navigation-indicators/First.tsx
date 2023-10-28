import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";
import { LoadingWrapper } from "./loading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "./router";

type Props = NativeStackScreenProps<Routes, "First">;

const First = ({ navigation }: Props) => (
  <LoadingWrapper>
    <View style={styles.container}>
      <Button title="Second" onPress={() => navigation.navigate("Second")} />
      <Button title="Third" onPress={() => navigation.navigate("Third")} />
    </View>
  </LoadingWrapper>
);

export default First;
