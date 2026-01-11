// src/screens/PremiumScreen.jsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../components/headers/AppHeader";
import PremiumBadge from "../components/PremiumBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useSubscription } from "../context/SubscriptionContext";

export default function PremiumScreen() {
  const { isPremium, activatePremium, deactivatePremium } =
    useSubscription();

  return (
    <View style={styles.container}>
      <AppHeader title="Premium" />

      <View style={styles.content}>
        <PremiumBadge isPremium={isPremium} label="PREMIUM USER" />

        <Text style={styles.title}>
          Unlock better Synce experience
        </Text>

        <Text style={styles.text}>
          Premium users get ad‑free calling and better matching.
        </Text>

        {isPremium ? (
          <PrimaryButton
            label="Cancel subscription"
            onPress={deactivatePremium}
            style={styles.button}
          />
        ) : (
          <PrimaryButton
            label="Go premium"
            onPress={activatePremium}
            style={styles.button}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "center",
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
  },
  button: {
    marginTop: 16,
    width: "80%",
  },
});