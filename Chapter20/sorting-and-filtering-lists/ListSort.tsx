import React from "react";
import { Text } from "react-native";

const arrows = new Map([
  [true, "▼"],
  [false, "▲"],
]);

type Props = {
  onSort: () => void;
  asc: boolean;
};

export default function ListSort({ onSort, asc }: Props) {
  return <Text onPress={onSort}>{arrows.get(asc)}</Text>;
}
