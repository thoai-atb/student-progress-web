import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [featuredProgressIds, setFeaturedProgressIds] = useState([
    "general",
    "semester",
  ]);
  const value = {
    featuredProgressIds,
    setFeaturedProgressIds,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
