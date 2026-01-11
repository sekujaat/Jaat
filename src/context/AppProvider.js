// src/context/AppProvider.js

import React from "react";
import { AuthProvider } from "./AuthContext";
import { LocationProvider } from "./LocationContext";
import { NotificationProvider } from "./NotificationContext";
import { SubscriptionProvider } from "./SubscriptionContext";

export default function AppProvider({ children }) {
  return (
    <AuthProvider>
      <SubscriptionProvider>
        <LocationProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </LocationProvider>
      </SubscriptionProvider>
    </AuthProvider>
  );
}