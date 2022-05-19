import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useStudentYears = () => {
  const [studentYears, setStudentYears] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProgressCategories = async () => {
    setIsLoading(true);
    try {
      const response = await MediatorManagerAPI.getStudentYears();
      setStudentYears(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };   

  useEffect(() => {
    getProgressCategories();
  }, []);

  return { studentYears, isLoading, error };
};
