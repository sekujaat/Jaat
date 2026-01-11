import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import PostCard from "../../components/cards/PostCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { createUser } from "../../models/userModel";
import { SCREENS } from "../../navigation/navigationConstants";

export default function FeedScreen({ navigation }) {
  const [posts] = useState([
    {
      id: "1",
      title: "Welcome to Synce",
      body: "Start random video calls and make new friends.",
      author: createUser({ name: "Team Synce" }).name,
      createdAt: "Today",
    },
  ]);

  return (
    <View style={styles.container}>
      <AppHeader title="Feed" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            title={item.title}
            body={item.body}
            author={item.author}
            createdAt={item.createdAt}
          />
        )}
      />
      <PrimaryButton
        label="Create post"
        onPress={() => navigation.navigate(SCREENS.HOME.CREATE_POST)}
        style={styles.fab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});