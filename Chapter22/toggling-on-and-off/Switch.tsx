import React from "react";
import { View, Text, Switch, SwitchProps } from "react-native";
import styles from "./styles";

type CustomSwitchProps = SwitchProps & {
  label: string;
};

export default function CustomSwitch(props: CustomSwitchProps) {
  return (
    <View style={styles.customSwitch}>
      <Text>{props.label}</Text>
      <Switch {...props} />
    </View>
  );
}
