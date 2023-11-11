import React from "react";
import { Alert } from "react-native";

type Props = {
  title: string;
  message: string;
  buttons: { text: string; onPress: () => void }[];
  visible: boolean;
};

export default function ConfirmationAlert({
  title = "",
  message = "",
  buttons = [],
  visible,
}: Props) {
  React.useEffect(() => {
    if (visible) {
      Alert.alert(title, message, buttons);
    }
  }, [visible]);

  return null;
}
