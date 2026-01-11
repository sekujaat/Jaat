import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import TextInputField from "../../components/inputs/TextInputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useAuth } from "../../context/AuthContext";
import { SCREENS } from "../../navigation/navigationConstants";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Node.js + Neon login API
    login({
      id: "demo-user",
      name: "Demo User",
      isPremium: false,
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Login" />
      <View style={styles.content}>
        <TextInputField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
        />
        <TextInputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
        />
        <PrimaryButton label="Login" onPress={handleLogin} style={styles.button} />
        <SecondaryButton
          label="Create account"
          onPress={() => navigation.navigate(SCREENS.AUTH.SIGNUP)}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  button: { marginTop: 12 },
});
