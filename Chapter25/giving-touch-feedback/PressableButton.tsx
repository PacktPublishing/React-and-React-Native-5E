import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const PressableButton = () => {
  const [text, setText] = useState("Not Pressed");

  return (
    <Pressable
      onPressIn={() => setText("Pressed")}
      onPressOut={() => setText("Press")}
      onLongPress={() => {
        setText("Long Pressed");
      }}
      delayLongPress={500}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
      ]}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

export default PressableButton;
