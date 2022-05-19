import { useEffect, useState } from "react";
import { MediatorManagerAPI } from "../apis/mediator-manager-api";

export const useStudentData = (studentId, progressCategoryId, reload, setReload) => {
  const [studentData, setStudentData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudentData = async () => {
      setIsLoading(true);
      setStudentData(null);
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
    if(reload || !studentData) {
      getStudentData();
      setReload(false);
    }
  }, [studentId, progressCategoryId, reload, setReload, studentData]);

  useEffect(() => {
    setReload(true);
  }, [studentId, progressCategoryId, setReload]);

  return { studentData, isLoading, error };
};
