import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import TextInputField from "../../components/inputs/TextInputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useAuth } from "../../context/AuthContext";

export default function SignupScreen({ navigation }) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // TODO: Node.js + Neon signup API
    login({
      id: "demo-user",
      name,
      isPremium: false,
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Sign up" showBack onBackPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <TextInputField label="Name" value={name} onChangeText={setName} placeholder="Your name" />
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
        <PrimaryButton label="Create account" onPress={handleSignup} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  button: { marginTop: 16 },
});