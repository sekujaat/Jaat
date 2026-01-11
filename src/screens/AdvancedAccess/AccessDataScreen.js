// src/screens/AdvancedAccess/AccessDataScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import { useAuth } from "../../context/AuthContext";

export default function AccessDataScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <AppHeader title="Your data" />
      <View style={styles.content}>
        <Text style={styles.label}>User ID</Text>
        <Text style={styles.value}>{user?.id || "-"}</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name || "-"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { padding: 16 },
  label: { marginTop: 8, fontSize: 13, color: "#6b7280" },
  value: { fontSize: 15, color: "#111827" },
});