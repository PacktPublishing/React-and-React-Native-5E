import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import ConfirmationModal from "./ConfirmationModal";

import styles from "./styles";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function toggleAlert() {
    Alert.alert("Are you sure?", "For real?", [
      { text: "Nope", onPress: () => {} },
      { text: "Yep", onPress: () => {} },
    ]);
  }

  return (
    <View style={styles.container}>
      <ConfirmationModal
        animationType="fade"
        visible={modalVisible}
        onPressConfirm={toggleModal}
        onPressCancel={toggleModal}
      />
      <Text style={styles.text} onPress={toggleModal}>
        Show Confirmation Modal
      </Text>
      <Text style={styles.text} onPress={toggleAlert}>
        Show Confirmation Alert
      </Text>
    </View>
  );
}
