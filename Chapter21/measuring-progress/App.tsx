import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";

export default function MeasuringProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeoutRef: NodeJS.Timeout | null = null;

    function updateProgress() {
      setProgress((currentProgress) => {
        if (currentProgress < 1) {
          return currentProgress + 0.01;
        } else {
          return 0;
        }
      });

      timeoutRef = setTimeout(updateProgress, 100);
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
