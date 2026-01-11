// src/navigation/RootNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACKS } from "./navigationConstants";
import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./AppStackNavigator";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen
          name={STACKS.AUTH}
          component={AuthStackNavigator}
        />
      ) : (
        <Stack.Screen
          name={STACKS.APP}
          component={AppStackNavigator}
        />
      )}
    </Stack.Navigator>
  );
}