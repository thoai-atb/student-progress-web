import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useBrowseStudents = ({
  progressCategoryId,
  studentYearId,
  statusId,
  studentId,
  studentName,
  page,
  size,
}) => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

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
          page,
          size,
        });
        setTotal(response.data.total);
        setStudents(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getBrowseStudents();
  }, [
    progressCategoryId,
    studentYearId,
    statusId,
    studentId,
    studentName,
    page,
    size,
  ]);

  return {
    students,
    isLoading,
    error,
    total,
  };
};
