import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Details from "./Details";
import { RoutesParams } from "./router";

const Stack = createNativeStackNavigator<RoutesParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            headerRight: () => {
              return (
                <Button
                  title="Buy"
                  onPress={() => {}}
                  disabled={route.params.stock === 0}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
