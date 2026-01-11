import AsyncStorage from "@react-native-async-storage/async-storage";

const PREFIX = "synce_pref_";

async function set(key, value) {
  const json = JSON.stringify(value);
  await AsyncStorage.setItem(PREFIX + key, json);
}

async function get(key, defaultValue = null) {
  const raw = await AsyncStorage.getItem(PREFIX + key);
  if (!raw) return defaultValue;
  try {
    return JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}

async function remove(key) {
  await AsyncStorage.removeItem(PREFIX + key);
}

export const preferencesStorage = {
  set,
  get,
  remove,
};