import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import CallButton from "../../components/CallButton";
import Spinner from "../../components/loaders/Spinner";
import { videoCallConfig } from "../../config/videoCallConfig";
import { useAuth } from "../../context/AuthContext";
import { SCREENS } from "../../navigation/navigationConstants";

export default function RandomCallScreen({ navigation }) {
  const { user } = useAuth();
  const [connecting, setConnecting] = useState(false);

  const handleTokenReceived = (data) => {
    setConnecting(false);
    // TODO: yahan actual Agora call screen pe navigate karna:
    // navigation.navigate("AgoraCall", { ...data });
  };

  const handleStartCall = () => {
    setConnecting(true);
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Random call"
        showBack
        onBackPress={() => navigation.goBack()}
      />

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
          onPress={handleStartCall}
        />

        <Text
          style={styles.historyLink}
          onPress={() => navigation.navigate(SCREENS.CALL.HISTORY)}
        >
          View call history
        </Text>
      </View>
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
  historyLink: {
    marginTop: 20,
    fontSize: 13,
    color: "#2563eb",
    textDecorationLine: "underline",
  },
});