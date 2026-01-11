import React, { useMemo } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import UserCard from "../../components/cards/UserCard";

export default function SearchResultScreen({ route, navigation }) {
  const query = route?.params?.query || "";

  // Demo static data; baad me yahan Node.js + Neon se API call aayegi
  const results = useMemo(
    () =>
      !query
        ? []
        : [
            {
              id: "1",
              name: "Demo user",
              username: "demo",
              bio: "Sample result for " + query,
              isPremium: false,
            },
          ],
    [query]
  );

  return (
    <View style={styles.container}>
      <AppHeader
        title="Results"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      {results.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No users found.</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <UserCard
              name={item.name}
              username={item.username}
              bio={item.bio}
              isPremium={item.isPremium}
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