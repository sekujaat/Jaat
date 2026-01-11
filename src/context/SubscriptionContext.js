// src/context/SubscriptionContext.js

import React, {
  createContext,
  useContext,
  useState,
} from "react";

const SubscriptionContext = createContext(null);

export function SubscriptionProvider({ children }) {
  const [isPremium, setIsPremium] = useState(false);

  const activatePremium = () => setIsPremium(true);
  const deactivatePremium = () => setIsPremium(false);

  const value = {
    isPremium,
    activatePremium,
    deactivatePremium,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscription = () =>
  useContext(SubscriptionContext);