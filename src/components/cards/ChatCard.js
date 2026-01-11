// src/components/cards/ChatCard.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ChatCard({
  name,
  lastMessage,
  time,
  unreadCount = 0,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarText}>
          {name?.[0]?.toUpperCase() || "U"}
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          {!!time && (
            <Text style={styles.time} numberOfLines={1}>
              {time}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.message} numberOfLines={1}>
            {lastMessage}
          </Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {unreadCount > 9 ? "9+" : unreadCount}
              </Text>
            </View>
          )}
        </View>
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
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#2563eb22",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2563eb",
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  time: {
    marginLeft: 8,
    fontSize: 12,
    color: "#6b7280",
  },
  message: {
    flex: 1,
    marginTop: 2,
    fontSize: 14,
    color: "#4b5563",
  },
  badge: {
    marginLeft: 8,
    minWidth: 20,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 999,
    backgroundColor: "#ef4444",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "700",
  },
});