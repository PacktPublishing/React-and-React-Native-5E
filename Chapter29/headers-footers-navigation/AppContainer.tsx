import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import appConfig from "./tamagui.config";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer({ children }: Props) {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={appConfig}>{children}</TamaguiProvider>
    </SafeAreaProvider>
  );
}
