import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStackNavigator from "./navigation/AppStackNavigator";
import theme from "./theme/theme";
import { logInfo } from "./utils/logger";

export default function App() {
  React.useEffect(() => {
    logInfo("App mounted with theme", theme);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}