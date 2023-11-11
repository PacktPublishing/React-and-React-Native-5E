import React, { useState, useEffect } from "react";
import { View, Modal, Text, ModalProps } from "react-native";
import styles from "./styles";

type Props = {
  message: string;
  duration?: number;
};

export default function Notification({ message, duration = 1500 }: Props) {
  const [notificationMessage, setMessage] = useState<string | undefined>(
    message
  );

  useEffect(() => {
    setMessage(message);

    const timer = setTimeout(() => {
      setMessage(undefined);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={Boolean(notificationMessage)}
    >
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text>{notificationMessage}</Text>
        </View>
      </View>
    </Modal>
  );
}
