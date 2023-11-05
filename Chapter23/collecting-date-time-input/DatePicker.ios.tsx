import React from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import { DatePickerProps } from "./DatePickerProps";

export default function DatePicker(props: DatePickerProps) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{props.label}</Text>
      <DateTimePicker
        mode="date"
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
