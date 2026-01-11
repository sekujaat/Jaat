import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import TextInputField from "../../components/inputs/TextInputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useAuth } from "../../context/AuthContext";

export default function EditProfileScreen({ navigation }) {
  const { user, login } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");

  const handleSave = () => {
    login({ ...(user || {}), name, bio });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Edit profile"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <TextInputField label="Name" value={name} onChangeText={setName} />
        <TextInputField
          label="Bio"
          value={bio}
          onChangeText={setBio}
          multiline
          placeholder="Tell something about yourself"
        />
        <PrimaryButton
          label="Save changes"
          onPress={handleSave}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  button: { marginTop: 14 },
});