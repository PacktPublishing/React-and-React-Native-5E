import { Text, Stack } from "tamagui";
import AppContainer from "./AppContainer";
import { ScreenContainer } from "./ScreenContainer";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <AppContainer>
      <ScreenContainer title="Home">
        <Stack flex={1} justifyContent="center" alignItems="center">
          <Text>Home content goes here...</Text>
        </Stack>
      </ScreenContainer>
    </AppContainer>
  );
}
