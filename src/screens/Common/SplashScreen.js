// src/screens/Common/SplashScreen.js

import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { APP_NAME } from "../../config/env";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{APP_NAME}</Text>
      <Text style={styles.subtitle}>Sync with the world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#111827" },
  logo: { fontSize: 28, fontWeight: "800", color: "#f9fafb" },
  subtitle: { marginTop: 6, fontSize: 13, color: "#9ca3af" },
});