import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import ChatCard from "../../components/cards/ChatCard";
import { SCREENS } from "../../navigation/navigationConstants";

export default function ChatListScreen({ navigation }) {
  const [chats] = useState([
    {
      id: "1",
      name: "Demo user",
      lastMessage: "Hey, welcome to Synce!",
      time: "now",
      unreadCount: 1,
    },
  ]);

  return (
    <View style={styles.container}>
      <AppHeader title="Chats" />
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ChatCard
            name={item.name}
            lastMessage={item.lastMessage}
            time={item.time}
            unreadCount={item.unreadCount}
            onPress={() =>
              navigation.navigate(SCREENS.HOME.CHAT, { chatId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  list: { paddingVertical: 8 },
});