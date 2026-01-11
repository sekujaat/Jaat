// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./src/context/AppProvider";
import RootNavigator from "./src/navigation/RootNavigator"; // yeh tum banaoge

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}