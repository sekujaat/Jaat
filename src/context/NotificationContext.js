// src/context/NotificationContext.js

import React, {
  createContext,
  useContext,
  useState,
} from "react";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const increment = (by = 1) =>
    setUnreadCount((prev) => prev + by);
  const reset = () => setUnreadCount(0);

  const value = {
    unreadCount,
    increment,
    reset,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () =>
  useContext(NotificationContext);