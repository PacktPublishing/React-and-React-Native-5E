import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/FontAwesome";
import styles from "./styles";
import { iconNames, IconsType, IconName } from "./icon-names";

export default function RenderingIcons() {
  const [selected, setSelected] = useState<IconsType>("web_app_icons");
  const [listSource, setListSource] = useState<IconName[]>([]);
  const categories = Object.keys(iconNames);

  function updateListSource(selected: IconsType) {
    const listSource = iconNames[selected] as any;
    setListSource(listSource);
    setSelected(selected);
  }

  useEffect(() => {
    updateListSource(selected);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker selectedValue={selected} onValueChange={updateListSource}>
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <FlatList
        style={styles.icons}
        data={listSource.map((value, key) => ({ key: key.toString(), value }))}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.value} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
