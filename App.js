
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import SplashIcon from "./screens/SplashIcon";
import Onboard4 from "./screens/Onboard4";
import Onboard3 from "./screens/Onboard3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wellcome from "./screens/Wellcome";
const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={SplashIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard4"
              component={Onboard4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboard3"
              component={Onboard3}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="wellcome"
              component={Wellcome}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
