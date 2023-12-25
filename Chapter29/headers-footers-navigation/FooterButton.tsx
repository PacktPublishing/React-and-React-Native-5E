import { Text, Stack } from "tamagui";

type Props = {
  selected: boolean;
  onPress: () => void;
  title: string;
  icon: React.ReactNode;
};

export const FooterButton = ({ selected, onPress, title, icon }: Props) => {
  return (
    <Stack
      jc="center"
      ai="center"
      opacity={selected ? 1 : 0.5}
      pt="$2"
      flex={1}
      onPress={onPress}
    >
      {icon}
      <Text color="white" fontSize="12">
        {title}
      </Text>
    </Stack>
  );
};
