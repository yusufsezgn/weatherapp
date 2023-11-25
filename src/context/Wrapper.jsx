import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Wrapper({ children }) {
  const [city, setCity] = useState();
  const [infos, setInfos] = useState();
  const [hourlyInfos, setHourlyInfos] = useState()

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
