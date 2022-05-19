import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useProcessors = (progressCategoryId, reload, setReload) => {
  const [processors, setProcessors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProcessors = async (progressCategoryId) => {
      if (!reload && processors) return;
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
        setReload(false);
      }
    };
    getProcessors(progressCategoryId);
  }, [progressCategoryId, reload, setReload, processors]);

  useEffect(() => {
    setReload(true);
  }, [progressCategoryId, setReload]);

  return { processors, isLoading, error };
};
