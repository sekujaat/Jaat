import EncryptedStorage from "react-native-encrypted-storage";

const PREFIX = "synce_secure_";

async function set(key, value) {
  await EncryptedStorage.setItem(PREFIX + key, JSON.stringify(value));
}

async function get(key) {
  const data = await EncryptedStorage.getItem(PREFIX + key);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function remove(key) {
  await EncryptedStorage.removeItem(PREFIX + key);
}

export const secureStorage = {
  set,
  get,
  remove,
};