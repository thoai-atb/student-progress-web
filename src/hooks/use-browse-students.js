import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useBrowseStudents = (
  progressCategoryId,
  studentYearId,
  statusId
) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBrowseStudents = async (
    progressCategoryId,
    studentYearId,
    statusId
  ) => {
    if (!progressCategoryId) return;
    try {
      setIsLoading(true);
      const response = await MediatorManagerAPI.getBrowseStudents(
        progressCategoryId,
        studentYearId,
        statusId
      );
      setStudents(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBrowseStudents(progressCategoryId, studentYearId, statusId);
  }, [progressCategoryId, studentYearId, statusId]);

  return {
    students,
    isLoading,
    error,
  };
};
