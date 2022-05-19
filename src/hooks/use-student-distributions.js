import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useStudentDistributions = (studentYear) => {
  const [studentDistributions, setStudentDistributions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const controller = new AbortController();
    const getProgressCategories = async () => {
      setIsLoading(true);
      try {
        const response = await MediatorManagerAPI.getStudentDistributions(
          studentYear
        );
        setStudentDistributions(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProgressCategories();
  }, [studentYear]);

  return { studentDistributions, isLoading, error };
};
