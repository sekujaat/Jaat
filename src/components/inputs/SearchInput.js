// src/components/inputs/SearchInput.js

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchInput({
  value,
  onChangeText,
  placeholder = "Search",
  autoFocus = false,
}) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#9ca3af" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={autoFocus}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    color: "#111827",
  },
});