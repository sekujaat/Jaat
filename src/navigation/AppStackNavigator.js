import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import { SCREENS, STACKS } from "./navigationConstants";

// Home
import ChatScreen from "../screens/Home/ChatScreen";
import CreatePostScreen from "../screens/Home/CreatePostScreen";

// Profile
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import FriendRequestsScreen from "../screens/Profile/FriendRequestsScreen";
import PrivacySettingsScreen from "../screens/Profile/privacySettingsScreen";
import SubscriptionScreen from "../screens/Profile/SubscriptionScreen";

// Advanced access
import AdvancedAccessScreen from "../screens/AdvancedAccess/AdvancedAccessScreen";
import AccessDataScreen from "../screens/AdvancedAccess/AccessDataScreen";
import AccessSettingsScreen from "../screens/AdvancedAccess/AccessSettingsScreen";

// Search
import SearchScreen from "../screens/Search/SearchScreen";
import SearchResultScreen from "../screens/Search/SearchResultScreen";

// Random video call
import RandomCallScreen from "../screens/RandomVideoCall/RandomCallScreen";
import CallHistoryScreen from "../screens/RandomVideoCall/CallHistoryScreen";

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tabs (Home, Calls, Chats, Profile) */}
      <Stack.Screen
        name={STACKS.ROOT_TABS}
        component={MainTabNavigator}
      />

      {/* Home extra screens */}
      <Stack.Screen
        name={SCREENS.HOME.CHAT}
        component={ChatScreen}
      />
      <Stack.Screen
        name={SCREENS.HOME.CREATE_POST}
        component={CreatePostScreen}
      />

      {/* Profile extra screens */}
      <Stack.Screen
        name={SCREENS.PROFILE.EDIT}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={SCREENS.PROFILE.FRIEND_REQUESTS}
        component={FriendRequestsScreen}
      />
      <Stack.Screen
        name={SCREENS.PROFILE.PRIVACY}
        component={PrivacySettingsScreen}
      />
      <Stack.Screen
        name={SCREENS.PROFILE.SUBSCRIPTION}
        component={SubscriptionScreen}
      />

      {/* Advanced access screens */}
      <Stack.Screen
        name={SCREENS.ADVANCED.ROOT}
        component={AdvancedAccessScreen}
      />
      <Stack.Screen
        name={SCREENS.ADVANCED.ACCESS_DATA}
        component={AccessDataScreen}
      />
      <Stack.Screen
        name={SCREENS.ADVANCED.ACCESS_SETTINGS}
        component={AccessSettingsScreen}
      />

      {/* Search screens */}
      <Stack.Screen
        name={SCREENS.SEARCH.MAIN}
        component={SearchScreen}
      />
      <Stack.Screen
        name={SCREENS.SEARCH.RESULTS}
        component={SearchResultScreen}
      />

      {/* Random video call screens */}
      <Stack.Screen
        name={SCREENS.CALL.RANDOM}
        component={RandomCallScreen}
      />
      <Stack.Screen
        name={SCREENS.CALL.HISTORY}
        component={CallHistoryScreen}
      />
    </Stack.Navigator>
  );
}