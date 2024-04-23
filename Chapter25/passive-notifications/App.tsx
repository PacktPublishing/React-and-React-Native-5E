import React from "react";
import { Text, View } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import styles from "./styles";
import Toast from "react-native-root-toast";

export default function PassiveNotifications() {
  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Text
          onPress={() => {
            Toast.show("Something happened!", {
              duration: Toast.durations.LONG,
            });
          }}
        >
          Show Notification
        </Text>
      </View>
    </RootSiblingParent>
  );
}
