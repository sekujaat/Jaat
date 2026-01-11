// src/components/cards/CallCard.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../buttons/IconButton";
import PremiumBadge from "../PremiumBadge";

export default function CallCard({
  name,
  status, // "online" | "busy" | "offline"
  isPremium = false,
  onCallPress,
}) {
  const statusColor =
    status === "online"
      ? "#22c55e"
      : status === "busy"
      ? "#f97316"
      : "#9ca3af";

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>
            {name?.[0]?.toUpperCase() || "U"}
          </Text>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
        </View>

        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <PremiumBadge isPremium={isPremium} />
          </View>
          <Text style={styles.statusText}>
            {status === "online"
              ? "Available for call"
              : status === "busy"
              ? "On another call"
              : "Offline"}
          </Text>
        </View>
      </View>

      <IconButton
        name="call"
        color="#22c55e"
        size={24}
        onPress={onCallPress}
        style={styles.callButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#22c55e22",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#16a34a",
  },
  statusDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ffffff",
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
  statusText: {
    marginTop: 2,
    fontSize: 13,
    color: "#6b7280",
  },
  callButton: {
    marginLeft: 8,
  },
});