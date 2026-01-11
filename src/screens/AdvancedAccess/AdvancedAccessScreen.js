// src/screens/AdvancedAccess/AdvancedAccessScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function AdvancedAccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeader title="Advanced access" />
      <View style={styles.content}>
        <Text style={styles.title}>Control your data</Text>
        <Text style={styles.text}>
          View what data is stored and manage advanced permissions.
        </Text>

        <PrimaryButton
          label="View my data"
          onPress={() => navigation.navigate("AccessData")}
          style={styles.button}
        />
        <PrimaryButton
          label="Access settings"
          onPress={() => navigation.navigate("AccessSettings")}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: "700", color: "#0f172a" },
  text: { marginTop: 6, fontSize: 14, color: "#4b5563" },
  button: { marginTop: 14, width: "80%" },
});