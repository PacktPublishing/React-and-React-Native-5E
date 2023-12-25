import { Stack } from "tamagui";

type Props = {
  children: React.ReactNode;
};

export const CardItem = ({ children }: Props) => {
  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignItems="center"
      borderWidth="1px"
      borderRadius="$4"
      borderColor="$black5"
      bg="white"
      h={100}
      elevationAndroid={5}
    >
      {children}
    </Stack>
  );
};
