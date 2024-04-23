import React from "react";
import * as Progress from "react-native-progress";
import { View, Text } from "react-native";
import styles from "./styles";

type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <View style={styles.progress}>
      <Progress.Bar width={170} progress={progress} />
    </View>
  );
}
