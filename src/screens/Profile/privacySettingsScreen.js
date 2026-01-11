import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import AppHeader from "../../components/headers/AppHeader";

export default function PrivacySettingsScreen({ navigation }) {
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [allowRandomCalls, setAllowRandomCalls] = useState(true);

  return (
    <View style={styles.container}>
      <AppHeader
        title="Privacy"
        showBack
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.title}>Show online status</Text>
            <Text style={styles.desc}>
              Allow others to see when you are online.
            </Text>
          </View>
          <Switch
            value={showOnlineStatus}
            onValueChange={setShowOnlineStatus}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.title}>Allow random calls</Text>
            <Text style={styles.desc}>
              Get matched in random video calls.
            </Text>
          </View>
          <Switch
            value={allowRandomCalls}
            onValueChange={setAllowRandomCalls}
          />
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
  info: { flex: 1, marginRight: 8 },
  title: { fontSize: 15, fontWeight: "600", color: "#0f172a" },
  desc: { fontSize: 12, color: "#6b7280", marginTop: 2 },
});