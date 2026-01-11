// src/components/cards/PostCard.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PostCard({
  title,
  body,
  author,
  createdAt,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      {!!body && (
        <Text style={styles.body} numberOfLines={3}>
          {body}
        </Text>
      )}

      <View style={styles.footer}>
        {!!author && (
          <Text style={styles.meta} numberOfLines={1}>
            {author}
          </Text>
        )}
        {!!createdAt && (
          <Text style={styles.meta} numberOfLines={1}>
            {createdAt}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },
  body: {
    marginTop: 4,
    fontSize: 14,
    color: "#4b5563",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  meta: {
    fontSize: 12,
    color: "#9ca3af",
  },
});