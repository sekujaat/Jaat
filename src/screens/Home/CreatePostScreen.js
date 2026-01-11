import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import TextInputField from "../../components/inputs/TextInputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handlePost = () => {
    // TODO: Node.js + Neon POST /posts
    Alert.alert("Post created", "Your post has been shared.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Create post" showBack onBackPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <TextInputField label="Title" value={title} onChangeText={setTitle} />
        <TextInputField
          label="Body"
          value={body}
          onChangeText={setBody}
          multiline
          placeholder="Write something..."
        />
        <PrimaryButton label="Post" onPress={handlePost} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: { flex: 1, padding: 16 },
  button: { marginTop: 16 },
});