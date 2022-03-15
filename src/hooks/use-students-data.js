import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useStudentsData = (studentYear) => {
  const [studentsData, setStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController();
    const getProgressCategories = async () => {
      setIsLoading(true);
      try {
        const response = await MediatorManagerAPI.getStudentsData(studentYear);
        setStudentsData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProgressCategories();
  }, [studentYear]);

  return { studentsData, isLoading, error };
};
