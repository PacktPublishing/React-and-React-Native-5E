import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { OpacityButton, HighlightButton } from "./Button";
import PressableButton from "./PressableButton";

export default function App() {
  return (
    <View style={styles.container}>
      <OpacityButton onPress={() => {}} label="Opacity" />
      <HighlightButton onPress={() => {}} label="Highlight" />
      <PressableButton />
    </View>
  );
}
