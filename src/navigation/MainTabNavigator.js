// src/navigation/MainTabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "../components/headers/BottomTabBar";
import { SCREENS } from "./navigationConstants";

import FeedScreen from "../screens/Home/FeedScreen";
import CallScreen from "../screens/CallScreen";
import ChatListScreen from "../screens/Home/ChatListScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, navigation }) => (
        <BottomTabBar
          activeTab={state.routeNames[state.index].toLowerCase()}
          onTabPress={(key) => navigation.navigate(
            key === "home"
              ? SCREENS.HOME.FEED
              : key === "calls"
              ? SCREENS.CALL.MAIN
              : key === "chats"
              ? SCREENS.HOME.CHAT_LIST
              : SCREENS.PROFILE.MAIN
          )}
        />
      )}
    >
      <Tab.Screen name={SCREENS.HOME.FEED} component={FeedScreen} />
      <Tab.Screen name={SCREENS.CALL.MAIN} component={CallScreen} />
      <Tab.Screen name={SCREENS.HOME.CHAT_LIST} component={ChatListScreen} />
      <Tab.Screen name={SCREENS.PROFILE.MAIN} component={ProfileScreen} />
    </Tab.Navigator>
  );
}