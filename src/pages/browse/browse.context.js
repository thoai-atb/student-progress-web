import { createContext, useContext } from "react";

export const BrowseContext = createContext();

export const useBrowseContext = () => {
  return useContext(BrowseContext);
};

export const BrowseProvider = ({ children }) => {
  return (
    <BrowseContext.Provider
      value={{
      }}
    >
      {children}
    </BrowseContext.Provider>
  );
};