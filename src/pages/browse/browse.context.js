import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useBrowseStudents } from "../../hooks/use-browse-students";
import { useProgressCategories } from "../../hooks/use-progress-categories";

export const BrowseContext = createContext();

export const useBrowseContext = () => {
  return useContext(BrowseContext);
};

export const BrowseProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const { progressCategories, getProgressMetadata } = useProgressCategories();
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
  const studentId = useMemo(
    () => searchParams.get("studentId") || "",
    [searchParams]
  );
  const studentName = useMemo(
    () => searchParams.get("studentName") || "",
    [searchParams]
  );
  const { students, isLoading, total } = useBrowseStudents({
    progressCategoryId,
    studentYearId,
    statusId,
    studentId,
    studentName,
    page,
    size: pageSize,
  });

  useEffect(() => {
    if (!searchParams.get("progressCategory") && progressCategories?.[0]?.id) {
      searchParams.set("progressCategory", progressCategories[0].id);
      setSearchParams(searchParams);
    }
  }, [progressCategories, searchParams, setSearchParams]);

  useEffect(() => {
    setPage(1);
  }, [progressCategoryId, studentYearId, statusId, studentId, studentName]);

  const value = {
    searchParams,
    setSearchParams,
    progressCategories,
    progressCategoryId,
    getProgressMetadata,
    students,
    isLoading,
    page,
    setPage,
    pageSize,
    setPageSize,
    total,
  };
  return (
    <BrowseContext.Provider value={value}>{children}</BrowseContext.Provider>
  );
};
