// src/components/loaders/Spinner.js

import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Spinner({ size = "small", color = "#2563eb" }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});