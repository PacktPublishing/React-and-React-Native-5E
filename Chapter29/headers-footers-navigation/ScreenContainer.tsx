import { Text, Stack } from "tamagui";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FooterButton } from "./FooterButton";
import React from "react";
import { Contact, HelpCircle, Home, Settings } from "@tamagui/lucide-icons";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const ScreenContainer = ({ title, children }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const [selected, setSelected] = React.useState(0);

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

      <Stack
        bg="#6200ee"
        alignItems="center"
        flexDirection="row"
        paddingBottom={bottom}
      >
        <FooterButton
          title="Home"
          icon={<Home size="$2" color="$background" />}
          selected={selected === 0}
          onPress={() => setSelected(0)}
        />

        <FooterButton
          title="Settings"
          icon={<Settings size="$2" color="$background" />}
          selected={selected === 1}
          onPress={() => setSelected(1)}
        />

        <FooterButton
          title="Help"
          icon={<HelpCircle size="$2" color="$background" />}
          selected={selected === 2}
          onPress={() => setSelected(2)}
        />

        <FooterButton
          title="Contact"
          icon={<Contact size="$2" color="$background" />}
          selected={selected === 3}
          onPress={() => setSelected(3)}
        />
      </Stack>
    </>
  );
};
