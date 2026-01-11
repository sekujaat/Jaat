// src/components/loaders/SkeletonLoader.js

import React from "react";
import { View, StyleSheet } from "react-native";

function SkeletonItem() {
  return (
    <View style={styles.row}>
      <View style={styles.avatar} />
      <View style={styles.lines}>
        <View style={styles.lineShort} />
        <View style={styles.lineLong} />
      </View>
    </View>
  );
}

export default function SkeletonLoader({ count = 3 }) {
  return (
    <View>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
  },
  lines: {
    flex: 1,
    marginLeft: 10,
  },
  lineShort: {
    width: "40%",
    height: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
    marginBottom: 6,
  },
  lineLong: {
    width: "80%",
    height: 10,
    borderRadius: 999,
    backgroundColor: "#e5e7eb",
  },
});