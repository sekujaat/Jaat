// src/components/cards/UserCard.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PremiumBadge from "../PremiumBadge";

export default function UserCard({
  name,
  username,
  bio,
  isPremium = false,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarText}>
          {name?.[0]?.toUpperCase() || "U"}
        </Text>
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <PremiumBadge isPremium={isPremium} />
        </View>
        {!!username && (
          <Text style={styles.username} numberOfLines={1}>
            @{username}
          </Text>
        )}
        {!!bio && (
          <Text style={styles.bio} numberOfLines={2}>
            {bio}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatarCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#6366f122",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4f46e5",
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginRight: 6,
  },
  username: {
    fontSize: 13,
    color: "#6b7280",
  },
  bio: {
    marginTop: 2,
    fontSize: 13,
    color: "#4b5563",
  },
});