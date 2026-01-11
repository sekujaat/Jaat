import { Platform } from "react-native";
import {
  TestIds,
  BannerAd,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";

// tumhara real AdMob IDs
// App ID: ca-app-pub-3781718251647447~8945014239
// Banner Ad Unit ID: ca-app-pub-3781718251647447/7472150463

const isAndroid = Platform.OS === "android";

export const bannerAdUnitId = isAndroid
  ? "ca-app-pub-3781718251647447/7472150463"
  : TestIds.BANNER;

const interstitialAdUnitId = isAndroid
  ? TestIds.INTERSTITIAL // abhi test rakhenge
  : TestIds.INTERSTITIAL;

let interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);

export function loadInterstitial() {
  return new Promise((resolve) => {
    interstitial.addAdEventListener(AdEventType.LOADED, () => resolve(true));
    interstitial.addAdEventListener(AdEventType.ERROR, () => resolve(false));
    interstitial.load();
  });
}

export async function showInterstitial() {
  try {
    await loadInterstitial();
    interstitial.show();
    interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId);
  } catch {}
}

export function getBannerComponent() {
  return BannerAd;
}