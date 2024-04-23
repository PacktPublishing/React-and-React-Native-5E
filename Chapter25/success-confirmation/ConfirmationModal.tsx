import React from "react";
import { View, Text, Modal, ModalProps } from "react-native";
import styles from "./styles";

type Props = ModalProps & {
  onPressConfirm: () => void;
  onPressCancel: () => void;
};

export default function ConfirmationModal({
  onPressConfirm,
  onPressCancel,
  ...modalProps
}: Props) {
  return (
    <Modal transparent onRequestClose={() => {}} {...modalProps}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>Dude, srsly?</Text>
          <Text style={styles.modalButton} onPress={onPressConfirm}>
            Yep
          </Text>
          <Text style={styles.modalButton} onPress={onPressCancel}>
            Nope
          </Text>
        </View>
      </View>
    </Modal>
  );
}
