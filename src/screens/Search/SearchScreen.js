import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "../../components/headers/AppHeader";
import TextInputField from "../../components/inputs/TextInputField";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { SCREENS } from "../../navigation/navigationConstants";

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    navigation.navigate(SCREENS.SEARCH.RESULTS, { query });
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Search users" showBack onBackPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <TextInputField
          label="Search"
          value={query}
          onChangeText={setQuery}
          placeholder="Name or username"
        />
        <PrimaryButton
          label="Search"
          onPress={handleSearch}
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