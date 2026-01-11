import React from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import UserCard from "../../components/cards/UserCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useAuth } from "../../context/AuthContext";
import { useSubscription } from "../../context/SubscriptionContext";
import { SCREENS } from "../../navigation/navigationConstants";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const { isPremium } = useSubscription();

  return (
    <View style={styles.container}>
      <AppHeader title="Profile" />
      <View style={styles.content}>
        <UserCard
          name={user?.name || "Guest"}
          username={user?.username || "guest"}
          bio={user?.bio || "Welcome to Synce"}
          isPremium={isPremium}
        />

        <PrimaryButton
          label="Edit profile"
          onPress={() => navigation.navigate(SCREENS.PROFILE.EDIT)}
          style={styles.button}
        />
        <PrimaryButton
          label="Friend requests"
          onPress={() =>
            navigation.navigate(SCREENS.PROFILE.FRIEND_REQUESTS)
          }
          style={styles.button}
        />
        <PrimaryButton
          label="Privacy settings"
          onPress={() => navigation.navigate(SCREENS.PROFILE.PRIVACY)}
          style={styles.button}
        />
        <PrimaryButton
          label="Subscription"
          onPress={() =>
            navigation.navigate(SCREENS.PROFILE.SUBSCRIPTION)
          }
          style={styles.button}
        />
        <PrimaryButton
          label="Logout"
          onPress={logout}
          style={[styles.button, { backgroundColor: "#ef4444" }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  button: { marginTop: 10 },
});