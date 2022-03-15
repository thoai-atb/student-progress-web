import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useStudentData = (studentId, progressCategoryId) => {
  const [studentData, setStudentData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudentData = async () => {
      setIsLoading(true);
      try {
        const response = await MediatorManagerAPI.getStudentData(
          studentId,
          progressCategoryId
        );
        setStudentData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getStudentData();
  }, [studentId, progressCategoryId]);

  return { studentData, isLoading, error };
};
