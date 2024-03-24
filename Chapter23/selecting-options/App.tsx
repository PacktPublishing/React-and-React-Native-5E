import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Select from "./Select";

const sizes = [
  { label: "", value: null },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

const garments = [
  { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
  { label: "Socks", value: 1, sizes: ["S", "L"] },
  { label: "Shirt", value: 2, sizes: ["M", "XL"] },
  { label: "Pants", value: 3, sizes: ["S", "L"] },
  { label: "Hat", value: 4, sizes: ["M", "XL"] },
];

export default function SelectingOptions() {
  const [availableGarments, setAvailableGarments] = useState<typeof garments>(
    []
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedGarment, setSelectedGarment] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.pickersBlock}>
        <Select
          label="Size"
          items={sizes}
          selectedValue={selectedSize}
          onValueChange={(size: string) => {
            setSelectedSize(size);
            setSelectedGarment(null);
            setAvailableGarments(
              garments.filter((i) => i.sizes.includes(size))
            );
          }}
        />
        <Select
          label="Garment"
          items={availableGarments}
          selectedValue={selectedGarment}
          onValueChange={(garment: number) => {
            setSelectedGarment(garment);
          }}
        />
      </View>
      <Text style={styles.selection}>
        {selectedSize &&
          selectedGarment &&
          `${selectedSize} ${
            garments.find((i) => i.value === selectedGarment)?.label
          }`}
      </Text>
    </View>
  );
}
