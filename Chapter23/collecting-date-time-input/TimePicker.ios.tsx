import React from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import { TimePickerProps } from "./TimePickerProps";

export default function DatePicker(props: TimePickerProps) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{props.label}</Text>
      <DateTimePicker
        mode="time"
        display="spinner"
        value={props.value}
        onChange={(event, date) => {
          if (date) {
            props.onChange(date);
          }
        }}
      />
    </View>
  );
}
