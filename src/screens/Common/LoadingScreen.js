// src/screens/Common/LoadingScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Spinner from "../../components/loaders/Spinner";

export default function LoadingScreen({ label = "Loading..." }) {
  return (
    <View style={styles.container}>
      <Spinner size="large" />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { marginTop: 8, fontSize: 14, color: "#4b5563" },
});