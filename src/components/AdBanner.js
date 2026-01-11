// src/components/AdBanner.js

import React from "react";
import { View, StyleSheet } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import { ADMOB_BANNER_AD_UNIT_ID } from "../config/env"; // tumhara env.js

const isDev = __DEV__;

export default function AdBanner() {
  // Dev me hamesha Google ka test ID, prod me tumhara real unit ID
  const unitId = isDev ? TestIds.BANNER : ADMOB_BANNER_AD_UNIT_ID;

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={unitId}
        size={BannerAdSize.ADAPTIVE_BANNER}
        onAdFailedToLoad={(error) => {
          console.log("AdBanner load error:", error);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
  },
});