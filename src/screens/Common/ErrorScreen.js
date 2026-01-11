// src/screens/Common/ErrorScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function ErrorScreen({ message = "Something went wrong", onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Error</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <PrimaryButton label="Retry" onPress={onRetry} style={styles.button} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 20, fontWeight: "700", color: "#b91c1c" },
  message: { marginTop: 8, fontSize: 14, color: "#4b5563", textAlign: "center" },
  button: { marginTop: 16, width: "60%" },
});