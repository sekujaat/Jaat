import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { SCREENS } from "../../navigation/navigationConstants";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Synce</Text>
      <Text style={styles.text}>
        Meet new people via random video calls and chats powered by Agora.
      </Text>
      <PrimaryButton
        label="Get started"
        onPress={() => navigation.replace(SCREENS.AUTH.LOGIN)}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "800", color: "#0f172a", textAlign: "center" },
  text: { marginTop: 10, fontSize: 14, color: "#4b5563", textAlign: "center" },
  button: { marginTop: 20, width: "80%" },
});