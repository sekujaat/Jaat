// src/components/headers/AppHeader.js

import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import IconButton from "../buttons/IconButton";

export default function AppHeader({
  title,
  subtitle,
  showBack = false,
  showRightIcon = false,
  rightIconName = "ellipsis-vertical",
  onBackPress,
  onRightPress,
}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <View style={styles.container}>
        <View style={styles.left}>
          {showBack && (
            <IconButton
              name="chevron-back"
              color="#e5e7eb"
              onPress={onBackPress}
              style={styles.icon}
            />
          )}
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {!!subtitle && (
              <Text style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>

        {showRightIcon && (
          <IconButton
            name={rightIconName}
            color="#e5e7eb"
            onPress={onRightPress}
            style={styles.icon}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: "#111827",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 6,
  },
  title: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    color: "#9ca3af",
    fontSize: 12,
    marginTop: 1,
  },
});