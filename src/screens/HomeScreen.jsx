// src/screens/HomeScreen.jsx

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import AppHeader from "../components/headers/AppHeader";
import AdBanner from "../components/AdBanner";
import CallCard from "../components/cards/CallCard";
import ChatCard from "../components/cards/ChatCard";
import { useAuth } from "../context/AuthContext";
import { useSubscription } from "../context/SubscriptionContext";

export default function HomeScreen() {
  const { user } = useAuth();
  const { isPremium } = useSubscription();

  return (
    <View style={styles.container}>
      <AppHeader
        title="Synce"
        subtitle={user ? `Hi, ${user.name}` : "Stay connected"}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Quick actions</Text>

        <CallCard
          name="Random Call"
          status="online"
          isPremium={isPremium}
          onCallPress={() => {
            // yahan se CallScreen pe navigate karna hai (navigator me)
          }}
        />

        <Text style={styles.sectionTitle}>Recent chats</Text>

        <ChatCard
          name="Demo user"
          lastMessage="Welcome to Synce!"
          time="now"
          unreadCount={1}
          onPress={() => {
            // ChatScreen pe navigate
          }}
        />
      </ScrollView>

      <AdBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { paddingVertical: 8 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 4,
  },
});