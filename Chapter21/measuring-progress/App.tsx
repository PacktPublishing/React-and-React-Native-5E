import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";

let timeoutRef: NodeJS.Timeout | null = null;

export default function MeasuringProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      setProgress((currentProgress) => {
        timeoutRef = setTimeout(updateProgress, 100);

        if (currentProgress < 1) {
          return currentProgress + 0.01;
        } else {
          return 0;
        }
      });
    }

    updateProgress();

    return () => {
      timeoutRef && clearTimeout(timeoutRef);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
}
