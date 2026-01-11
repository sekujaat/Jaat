// src/components/modals/ReportUserModal.js

import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TextInputField from "../inputs/TextInputField";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Spinner from "../loaders/Spinner";

const REASONS = [
  "Spam",
  "Harassment",
  "Inappropriate content",
  "Fake profile",
];

export default function ReportUserModal({
  visible,
  onClose,
  onSubmit,
  reportingUserId,
  reportedUserId,
  loading = false,
}) {
  const [selectedReason, setSelectedReason] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    if (!selectedReason) {
      return;
    }

    const payload = {
      reportingUserId,
      reportedUserId,
      reason: selectedReason,
      details,
    };

    onSubmit && onSubmit(payload);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Report user</Text>
          <Text style={styles.subtitle}>
            Select a reason and optionally add more details.
          </Text>

          <View style={styles.chipsRow}>
            {REASONS.map((reason) => {
              const active = selectedReason === reason;
              return (
                <TouchableOpacity
                  key={reason}
                  style={[
                    styles.chip,
                    active && styles.chipActive,
                  ]}
                  onPress={() => setSelectedReason(reason)}
                >
                  <Text
                    style={[
                      styles.chipText,
                      active && styles.chipTextActive,
                    ]}
                  >
                    {reason}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TextInputField
            label="Details (optional)"
            value={details}
            onChangeText={setDetails}
            placeholder="Describe what happened..."
            multiline
          />

          {loading && <Spinner size="small" />}

          <View style={styles.actions}>
            <SecondaryButton
              label="Cancel"
              onPress={onClose}
              style={styles.button}
            />
            <PrimaryButton
              label="Submit"
              onPress={handleSubmit}
              disabled={!selectedReason || loading}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "flex-end",
  },
  card: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6b7280",
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 6,
  },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  chipActive: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },
  chipText: {
    fontSize: 12,
    color: "#4b5563",
  },
  chipTextActive: {
    color: "#b91c1c",
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  button: {
    minWidth: 90,
    marginLeft: 8,
  },
});