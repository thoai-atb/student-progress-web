import { createContext, useContext, useState } from "react";
import { PROCESSORS_MOCK } from "./processors-mock-data";

export const ProcessorsContext = createContext();

export const useProcessorsContext = () => {
  const context = useContext(ProcessorsContext);
  if (context === undefined) {
    throw new Error(
      "useProcessorsContext must be used within a ProcessorsContextProvider"
    );
  }
  return context;
};

export const ProcessorsProvider = ({ children }) => {
  const [selectedProcessor, setSelectedProcessor] = useState(
    PROCESSORS_MOCK[0]
  );
  const [processors] = useState(PROCESSORS_MOCK);

  const value = {
    processors,
    selectedProcessor,
    setSelectedProcessor,
  };

  return (
    <ProcessorsContext.Provider value={value}>
      {children}
    </ProcessorsContext.Provider>
  );
};
