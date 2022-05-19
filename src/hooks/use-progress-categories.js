import { useCallback, useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useProgressCategories = () => {
  const [progressCategories, setProgressCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProgressMetadata = useCallback(
    (progressCategoryId) => {
      return progressCategories.find((c) => c.id === progressCategoryId);
    },
    [progressCategories]
  );

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

  return { progressCategories, getProgressMetadata, isLoading, error };
};
