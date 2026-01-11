// src/config/adConfig.js

import {
  ADMOB_APP_ID,
  ADMOB_BANNER_AD_UNIT_ID,
} from "./env";

export const adConfig = {
  appId: ADMOB_APP_ID,
  bannerUnitId: ADMOB_BANNER_AD_UNIT_ID,
  requestNonPersonalizedAdsOnly: true,
};