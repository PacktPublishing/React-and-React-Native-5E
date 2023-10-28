import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import * as Progress from "react-native-progress";

type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.progress}>
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      <Progress.Bar width={200} useNativeDriver={true} progress={progress} />
    </View>
  );
}
