import { createContext, useContext, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useBrowseStudents } from "../../hooks/use-browse-students";
import { useProgressCategories } from "../../hooks/use-progress-categories";

export const BrowseContext = createContext();

export const useBrowseContext = () => {
  return useContext(BrowseContext);
};

export const BrowseProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progressCategories } = useProgressCategories();
  const progressCategoryId = useMemo(
    () => searchParams.get("progressCategory") || "",
    [searchParams]
  );
  const studentYearId = useMemo(
    () => searchParams.get("studentYear") || "",
    [searchParams]
  );
  const statusId = useMemo(
    () => searchParams.get("status") || "",
    [searchParams]
  );
  const { students, isLoading } = useBrowseStudents(
    progressCategoryId,
    studentYearId,
    statusId
  );

  useEffect(() => {
    if (!searchParams.get("progressCategory") && progressCategories?.[0]?.id) {
      searchParams.set("progressCategory", progressCategories[0].id);
      setSearchParams(searchParams);
    }
  }, [progressCategories, searchParams, setSearchParams]);

  const value = {
    searchParams,
    setSearchParams,
    progressCategories,
    progressCategoryId,
    students,
    isLoading,
  };
  return (
    <BrowseContext.Provider value={value}>{children}</BrowseContext.Provider>
  );
};
