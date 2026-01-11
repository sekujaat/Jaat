import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import PremiumBadge from "../../components/PremiumBadge";
import { useSubscription } from "../../context/SubscriptionContext";

export default function SubscriptionScreen({ navigation }) {
  const { isPremium, activatePremium, deactivatePremium } = useSubscription();

  return (
    <View style={styles.container}>
      <AppHeader
        title="Subscription"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <PremiumBadge isPremium={isPremium} />

        <Text style={styles.title}>Synce Premium</Text>
        <Text style={styles.text}>
          Remove ads and boost your matching priority in random calls.
        </Text>

        {isPremium ? (
          <PrimaryButton
            label="Cancel subscription"
            onPress={deactivatePremium}
            style={styles.button}
          />
        ) : (
          <PrimaryButton
            label="Upgrade to Premium"
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
  content: { flex: 1, padding: 16 },
  title: { marginTop: 10, fontSize: 18, fontWeight: "700", color: "#0f172a" },
  text: { marginTop: 6, fontSize: 14, color: "#4b5563" },
  button: { marginTop: 16, width: "80%" },
});