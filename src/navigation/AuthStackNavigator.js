// src/navigation/AuthStackNavigator.js

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "./navigationConstants";
import AppHeader from "../components/headers/AppHeader";

import OnboardingScreen from "../screens/Auth/OnboardingScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={SCREENS.AUTH.ONBOARDING}
    >
      <Stack.Screen
        name={SCREENS.AUTH.ONBOARDING}
        component={OnboardingScreen}
      />
      <Stack.Screen name={SCREENS.AUTH.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREENS.AUTH.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
}