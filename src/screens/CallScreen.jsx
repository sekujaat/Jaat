// src/screens/CallScreen.jsx

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../components/headers/AppHeader";
import CallButton from "../components/CallButton";
import Spinner from "../components/loaders/Spinner";
import { videoCallConfig } from "../config/videoCallConfig";
import { useAuth } from "../context/AuthContext";

export default function CallScreen() {
  const { user } = useAuth();
  const [currentCall, setCurrentCall] = useState(null);
  const [connecting, setConnecting] = useState(false);

  const handleTokenReceived = (data) => {
    setConnecting(false);
    setCurrentCall(data);
    // yahan se Agora video call screen pe jaana hai (RandomVideoCall folder)
  };

  const handleStartCall = () => {
    setConnecting(true);
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Calls" />

      <View style={styles.content}>
        <Text style={styles.info}>
          Channel: {videoCallConfig.defaultChannel}
        </Text>
        <Text style={styles.info}>
          User ID: {user?.id || "guest"}
        </Text>

        {connecting && <Spinner size="small" />}

        <CallButton
          label="Start random call"
          channel={videoCallConfig.defaultChannel}
          uid={user?.id || 0}
          onTokenReceived={handleTokenReceived}
        />
      </View>

      {currentCall && (
        <View style={styles.callInfo}>
          <Text style={styles.callText}>
            Token received. Ready to join Agora channel.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 4,
  },
  callInfo: {
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#e5e7eb",
  },
  callText: {
    fontSize: 13,
    color: "#16a34a",
    textAlign: "center",
  },
});