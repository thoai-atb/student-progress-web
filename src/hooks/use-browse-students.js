import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useBrowseStudents = ({
  progressCategoryId,
  studentYearId,
  statusId,
  studentId,
  studentName,
}) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBrowseStudents = async () => {
      if (!progressCategoryId) return;
      try {
        setIsLoading(true);
        const response = await MediatorManagerAPI.getBrowseStudents({
          progressCategoryId,
          studentYearId,
          statusId,
          studentId,
          studentName,
        });
        setStudents(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getBrowseStudents();
  }, [progressCategoryId, studentYearId, statusId, studentId, studentName]);

  return {
    students,
    isLoading,
    error,
  };
};
