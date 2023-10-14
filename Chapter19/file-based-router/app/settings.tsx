import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>

      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}
