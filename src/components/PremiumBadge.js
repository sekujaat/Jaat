// src/components/PremiumBadge.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PremiumBadge({ isPremium, label = "PREMIUM" }) {
  if (!isPremium) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbbf24",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  text: {
    color: "#1f2937",
    fontSize: 11,
    fontWeight: "700",
  },
});