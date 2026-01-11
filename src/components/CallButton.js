// src/components/CallButton.js

import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { BACKEND_BASE_URL } from "../config/env"; // Render backend URL

export default function CallButton({
  channel,
  uid,
  label = "Start Call",
  onTokenReceived,
}) {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    if (!channel) {
      console.warn("CallButton: channel missing");
      return;
    }

    try {
      setLoading(true);

      const base = BACKEND_BASE_URL.replace(//$/, "");
      const res = await axios.get(`${base}/api/call/token`, {
        params: { channel, uid },
      });

      if (res.status === 200 && res.data.token) {
        onTokenReceived &&
          onTokenReceived({
            token: res.data.token,
            channel: res.data.channel,
            uid: res.data.uid,
          });
      } else {
        console.warn("CallButton: token not received", res.data);
      }
    } catch (err) {
      console.log("CallButton error:", err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, loading && styles.buttonDisabled]}
      onPress={handlePress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});