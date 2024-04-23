import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import ErrorModal from "./ErrorModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function toggleAlert() {
    Alert.alert("", "Failed to do the thing...", [
      {
        text: "Dismiss",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <ErrorModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />

      <Text style={styles.text} onPress={toggleModal}>
        Show Error Modal
      </Text>
      <Text style={styles.text} onPress={toggleAlert}>
        Show Error Alert
      </Text>
    </View>
  );
}
