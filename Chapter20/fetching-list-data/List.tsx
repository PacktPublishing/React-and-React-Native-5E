import React from "react";
import { Text, FlatList } from "react-native";
import styles from "./styles";
import ListControls from "./ListControls";

type Props = {
  data: { key: string; value: string }[];
  onFilter: (value: string) => void;
  onSort: () => void;
  asc: boolean;
};

export default function List({ data, onFilter, onSort, asc }: Props) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<ListControls {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
    />
  );
}
