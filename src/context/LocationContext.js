// src/context/LocationContext.js

import React, {
  createContext,
  useContext,
  useState,
} from "react";

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null); // { lat, lng }

  const updateLocation = (coords) => {
    setLocation(coords);
  };

  const value = {
    location,
    updateLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocationContext = () => useContext(LocationContext);