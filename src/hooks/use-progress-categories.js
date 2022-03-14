import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useProgressCategories = () => {
  const [progressCategories, setProgressCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProgressCategories = async () => {
    setIsLoading(true);
    try {
      const response = await MediatorManagerAPI.getProgressCategories();
      setProgressCategories(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProgressCategories();
  }, []);

  return { progressCategories, isLoading, error };
};
