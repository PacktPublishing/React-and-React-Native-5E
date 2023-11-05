import React from "react";
import { Text, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from "./styles";
import { DatePickerProps } from "./DatePickerProps";

export default function DatePicker({
  label,
  value,
  onChange,
}: DatePickerProps) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text
        onPress={() => {
          DateTimePickerAndroid.open({
            value: value,
            mode: "date",
            onChange: (event, date) => {
              if (event.type === "set" && date) {
                onChange(date);
              }
            },
          });
        }}
      >
        {value.toLocaleDateString()}
      </Text>
    </View>
  );
}
