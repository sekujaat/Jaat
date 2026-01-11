// src/components/buttons/SecondaryButton.js

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SecondaryButton({
  label,
  onPress,
  disabled = false,
  style,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  label: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "500",
  },
});