import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

type Props = {
  children: React.ReactNode;
};

export function LoadingWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return children;
  }
}
