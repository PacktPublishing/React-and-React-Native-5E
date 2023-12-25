import { Text, Stack, YStack, XStack } from "tamagui";
import AppContainer from "./AppContainer";
import { ScreenContainer } from "./ScreenContainer";
import * as SplashScreen from "expo-splash-screen";
import { CardItem } from "./CardItem";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <AppContainer>
      <ScreenContainer title="Using Layout Components">
        <YStack flex={1} space mx="$4">
          <XStack space justifyContent="center" alignItems="center" mt="$4">
            <CardItem>
              <Text>Card 1</Text>
            </CardItem>
            <CardItem>
              <Text>Card 2</Text>
            </CardItem>
          </XStack>

          <XStack space justifyContent="center" alignItems="center" mt="$2">
            <CardItem>
              <Text>Card 3</Text>
            </CardItem>
            <CardItem>
              <Text>Card 4</Text>
            </CardItem>
          </XStack>
        </YStack>
      </ScreenContainer>
    </AppContainer>
  );
}
