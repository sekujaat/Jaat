// src/screens/AdvancedAccess/AccessSettingsScreen.js

import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import AppHeader from "../../components/headers/AppHeader";

export default function AccessSettingsScreen() {
  const [allowLocation, setAllowLocation] = useState(true);
  const [allowNotifications, setAllowNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <AppHeader title="Access settings" />
      <View style={styles.content}>
        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Location</Text>
            <Text style={styles.desc}>Allow Synce to use your location.</Text>
          </View>
          <Switch value={allowLocation} onValueChange={setAllowLocation} />
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.desc}>Receive call and chat alerts.</Text>
          </View>
          <Switch value={allowNotifications} onValueChange={setAllowNotifications} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { padding: 16 },
  row: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 15, fontWeight: "600", color: "#0f172a" },
  desc: { fontSize: 12, color: "#6b7280", marginTop: 2, maxWidth: 220 },
});