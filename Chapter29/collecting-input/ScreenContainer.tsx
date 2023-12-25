import { Text, Stack } from "tamagui";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const ScreenContainer = ({ title, children }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <StatusBar backgroundColor="#3700B3" style="light" />
      <Stack h={top} bg="#6200ee" />
      <Stack
        bg="#6200ee"
        py="$4"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Text color="white" fontSize="$6" fontWeight="bold">
          {title}
        </Text>
      </Stack>

      <Stack flex={1}>{children}</Stack>
    </>
  );
};
