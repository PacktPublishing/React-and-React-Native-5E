import { PickerProps } from "@react-native-picker/picker";

export type SelectItem<T extends any> = {
  label: string;
  value: T;
};

export type SelectProps = PickerProps<string | number> & {
  label: string;
  items: SelectItem<string | number>[];
};
