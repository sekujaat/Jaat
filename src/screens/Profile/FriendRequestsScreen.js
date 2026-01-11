import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import UserCard from "../../components/cards/UserCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { createFriendRequest } from "../../models/FriendRequestModel";

export default function FriendRequestsScreen({ navigation }) {
  const [requests, setRequests] = useState([
    createFriendRequest({
      id: "1",
      fromUserId: "user-a",
      status: "pending",
    }),
  ]);

  const handleRespond = (id, accepted) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: accepted ? "accepted" : "rejected" } : r
      )
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Friend requests"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <UserCard
              name={item.fromUserId}
              username={item.fromUserId}
              isPremium={false}
            />
            {item.status === "pending" ? (
              <View style={styles.actions}>
                <PrimaryButton
                  label="Accept"
                  onPress={() => handleRespond(item.id, true)}
                  style={styles.actionButton}
                />
                <PrimaryButton
                  label="Reject"
                  onPress={() => handleRespond(item.id, false)}
                  style={[styles.actionButton, { backgroundColor: "#e5e7eb" }]}
                />
              </View>
            ) : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  list: { paddingVertical: 8 },
  row: { paddingHorizontal: 12, paddingVertical: 4 },
  actions: { flexDirection: "row", marginTop: 4 },
  actionButton: { marginRight: 8, paddingHorizontal: 12 },
});