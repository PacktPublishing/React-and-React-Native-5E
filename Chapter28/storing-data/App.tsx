import React, { useState, useEffect } from "react";
import { Text, TextInput, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { Button } from "./Button";
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";

export default function App() {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [source, setSource] = useState<KeyValuePair[]>([]);

  function setItem() {
    return AsyncStorage.setItem(key, value)
      .then(() => {
        setKey("");
        setValue("");
      })
      .then(loadItems);
  }

  function clearItems() {
    return AsyncStorage.clear().then(loadItems);
  }

  async function loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    setSource([...values]);
  }

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Key:</Text>
      <TextInput
        style={styles.input}
        value={key}
        onChangeText={(v) => {
          setKey(v);
        }}
      />
      <Text>Value:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(v) => {
          setValue(v);
        }}
      />
      <View style={styles.controls}>
        <Button label="Add" onPress={setItem} />
        <Button label="Clear" onPress={clearItems} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={source.map(([key, value]) => ({
            key: key.toString(),
            value,
          }))}
          renderItem={({ item: { value, key } }) => (
            <Text>
              {value} ({key})
            </Text>
          )}
        />
      </View>
    </View>
  );
}
