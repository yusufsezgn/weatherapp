import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Wrapper({ children }) {
  const [city, setCity] = useState(null);
  const [infos, setInfos] = useState(null);
  const [hourlyInfos, setHourlyInfos] = useState(null)

  const sharedState = {
    city,
    setCity,
    infos,
    setInfos,
    hourlyInfos, 
    setHourlyInfos
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
