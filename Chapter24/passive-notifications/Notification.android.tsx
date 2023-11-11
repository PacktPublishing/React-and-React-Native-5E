import React from "react";
import { ToastAndroid } from "react-native";

type Props = {
  message: string;
  duration?: number;
};

export default function Notification({
  message,
  duration = ToastAndroid.LONG,
}: Props) {
  React.useEffect(() => {
    if (message) {
      ToastAndroid.show(message, duration);
    }
  }, [message]);

  return null;
}
