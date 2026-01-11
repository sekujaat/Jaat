// src/components/modals/ConfirmationModal.js

import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function ConfirmationModal({
  visible,
  title = "Are you sure?",
  message,
  confirmLabel = "Yes",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          {!!message && (
            <Text style={styles.message}>{message}</Text>
          )}

          <View style={styles.actions}>
            <SecondaryButton
              label={cancelLabel}
              onPress={onCancel}
              style={styles.button}
            />
            <PrimaryButton
              label={confirmLabel}
              onPress={onConfirm}
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
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "85%",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },
  message: {
    marginTop: 6,
    fontSize: 14,
    color: "#4b5563",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 14,
  },
  button: {
    minWidth: 90,
    marginLeft: 8,
  },
});