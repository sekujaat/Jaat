import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import CallCard from "../../components/cards/CallCard";
import { createCall } from "../../models/CallModel";

export default function CallHistoryScreen({ navigation }) {
  const [calls] = useState([
    createCall({
      id: "1",
      callerId: "me",
      calleeId: "user-a",
      durationSeconds: 120,
      status: "completed",
    }),
  ]);

  return (
    <View style={styles.container}>
      <AppHeader
        title="Call history"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      {calls.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No calls yet.</Text>
        </View>
      ) : (
        <FlatList
          data={calls}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <CallCard
              name={item.calleeId}
              status={item.status}
              duration={item.durationSeconds}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  list: { paddingVertical: 8 },
  empty: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyText: { fontSize: 14, color: "#6b7280" },
});