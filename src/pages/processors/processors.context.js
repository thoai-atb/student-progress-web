import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProcessors } from "../../hooks/use-processors";

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
  const [searchParams] = useSearchParams();
  const [reload, setReload] = useState(false);
  const { processors } = useProcessors(
    searchParams.get("progressCategory") || "all",
    reload,
    setReload
  );
  const [selectedProcessor, setSelectedProcessor] = useState(null);

  useEffect(() => {
    if (processors?.[0]) setSelectedProcessor(processors[0]);
  }, [processors]);

  const value = {
    processors,
    reload,
    setReload,
    selectedProcessor,
    setSelectedProcessor,
  };

  return (
    <ProcessorsContext.Provider value={value}>
      {children}
    </ProcessorsContext.Provider>
  );
};
