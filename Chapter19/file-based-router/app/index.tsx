import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>

      <Link href="/settings" asChild>
        <Button title="Settings" />
      </Link>
    </View>
  );
}
