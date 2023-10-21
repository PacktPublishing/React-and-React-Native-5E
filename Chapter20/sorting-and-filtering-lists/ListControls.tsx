import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ListFilter from "./ListFilter";
import ListSort from "./ListSort";

type Props = {
  onFilter: (text: string) => void;
  onSort: () => void;
  asc: boolean;
};

export default function ListControls({ onFilter, onSort, asc }: Props) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );
}
