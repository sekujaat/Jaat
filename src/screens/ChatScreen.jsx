// src/screens/ChatScreen.jsx

import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AppHeader from "../components/headers/AppHeader";
import ChatCard from "../components/cards/ChatCard";
import TextInputField from "../components/inputs/TextInputField";
import IconButton from "../components/buttons/IconButton";
import { createChat } from "../models/ChatModel";
import { useAuth } from "../context/AuthContext";

export default function ChatScreen() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newChat = createChat({
      id: Date.now().toString(),
      fromUserId: user?.id || "me",
      toUserId: "other",
      message,
      sentAt: new Date().toISOString(),
    });

    setMessages((prev) => [newChat, ...prev]);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <AppHeader title="Chats" />

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ChatCard
            name={item.fromUserId === user?.id ? "You" : "User"}
            lastMessage={item.message}
            time={new Date(item.sentAt).toLocaleTimeString()}
          />
        )}
        inverted
      />

      <View style={styles.inputRow}>
        <View style={{ flex: 1 }}>
          <TextInputField
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
          />
        </View>
        <IconButton
          name="send"
          color="#2563eb"
          onPress={handleSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  list: { paddingVertical: 8 },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});