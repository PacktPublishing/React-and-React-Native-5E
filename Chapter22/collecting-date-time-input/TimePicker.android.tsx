import React from "react";
import { Text, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from "./styles";
import { TimePickerProps } from "./TimePickerProps";

export default function TimePicker({
  label,
  value,
  onChange,
}: TimePickerProps) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text
        onPress={() =>
          DateTimePickerAndroid.open({
            value: value,
            mode: "time",
            is24Hour: true,
            onChange: (event, date) => {
              if (event.type === "set" && date) {
                onChange(date);
              }
            },
          })
        }
      >
        {value.toLocaleTimeString()}
      </Text>
    </View>
  );
}
