import { config } from "@tamagui/config/v2";
import { createTamagui } from "tamagui";

const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
