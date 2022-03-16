import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../api/mediator-manager-api";

export const useProcessors = (progressCategoryId) => {
  const [processors, setProcessors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProcessors = async (progressCategoryId) => {
    setIsLoading(true);
    try {
      const response = await MediatorManagerAPI.getProcessors(
        progressCategoryId
      );
      setProcessors(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProcessors(progressCategoryId);
  }, [progressCategoryId]);

  return { processors, isLoading, error };
};
