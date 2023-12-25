import {
  Stack,
  YStack,
  XStack,
  Label,
  Input,
  Checkbox,
  RadioGroup,
} from "tamagui";
import AppContainer from "./AppContainer";
import { ScreenContainer } from "./ScreenContainer";
import * as SplashScreen from "expo-splash-screen";
import { SelectDemoItem } from "./SelectDemo";
import { Check } from "@tamagui/lucide-icons";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <AppContainer>
      <ScreenContainer title="Using Layout Components">
        <YStack flex={1} space mx="$4">
          <Stack>
            <Label htmlFor="name">Username</Label>
            <Input id="name" placeholder="Username" />
          </Stack>

          <Stack>
            <Label htmlFor="select">Select</Label>
            <SelectDemoItem />
          </Stack>

          <Stack>
            <Label htmlFor="select">Checkbox</Label>
            <Checkbox id="select">
              <Checkbox.Indicator>
                <Check />
              </Checkbox.Indicator>
            </Checkbox>
          </Stack>

          <RadioGroup defaultValue="1">
            <YStack>
              <XStack alignItems="center" space>
                <RadioGroup.Item value="1" id="1">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>

                <Label htmlFor="1">One</Label>
              </XStack>

              <XStack alignItems="center" space>
                <RadioGroup.Item value="2" id="2">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>

                <Label htmlFor="2">Two</Label>
              </XStack>
            </YStack>
          </RadioGroup>
        </YStack>
      </ScreenContainer>
    </AppContainer>
  );
}
