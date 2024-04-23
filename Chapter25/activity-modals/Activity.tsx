import React from "react";
import { View, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";

type ActivityProps = {
  visible: boolean;
  size?: "small" | "large";
};

export default function Activity({ visible, size = "large" }: ActivityProps) {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={size} />
      </View>
    </Modal>
  );
}
