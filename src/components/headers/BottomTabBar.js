// src/components/headers/BottomTabBar.js

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TABS = [
  { key: "home", label: "Home", icon: "home" },
  { key: "calls", label: "Calls", icon: "call" },
  { key: "chats", label: "Chats", icon: "chatbubble" },
  { key: "profile", label: "Profile", icon: "person" },
];

export default function BottomTabBar({ activeTab, onTabPress }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const focused = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress(tab.key)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={focused ? tab.icon : `${tab.icon}-outline`}
              size={22}
              color={focused ? "#2563eb" : "#6b7280"}
            />
            <Text
              style={[
                styles.label,
                focused && styles.labelFocused,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    paddingBottom: 6,
    paddingTop: 4,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 1,
    fontSize: 11,
    color: "#6b7280",
  },
  labelFocused: {
    color: "#2563eb",
    fontWeight: "600",
  },
});