import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useStudentData } from "../../../hooks/use-student-data";

export const StudentDetailsContext = createContext();

export const useStudentDetailsContext = () => {
  const context = useContext(StudentDetailsContext);
  if (!context) {
    throw new Error(
      "useStudentDetailsContext must be used within a StudentDetailsContext"
    );
  }
  return context;
};

export const StudentDetailsProvider = ({ children, reload, setReload }) => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const studentId = params.studentId;
  const progressCategoryId = searchParams.get("progressCategory") || "general";
  const { studentData } = useStudentData(
    studentId,
    progressCategoryId,
    reload,
    setReload
  );
  const currentSteps = useMemo(
    () => studentData?.progressStatus?.progressData || [],
    [studentData]
  );
  const [selectedStep, setSelectedStep] = useState(null);
  const [resetCurrentStep, setResetCurrentStep] = useState(false);

  useLayoutEffect(() => {
    if (!studentData?.progressStatus?.step) return;
    const selectedStepId = searchParams.get("step");
    var useDefault = true;
    if (selectedStepId) {
      const selectedStep = currentSteps.find(
        (step) => step.id === selectedStepId
      );
      if (selectedStep) {
        setSelectedStep(selectedStep);
        useDefault = false;
      }
    }
    if (useDefault) {
      searchParams.set("step", studentData?.progressStatus?.step?.id);
      setSearchParams(searchParams);
    }
  }, [
    currentSteps,
    searchParams,
    studentData,
    resetCurrentStep,
    setSearchParams,
  ]);

  useLayoutEffect(() => {
    if (resetCurrentStep) {
      searchParams.delete("step");
      setSearchParams(searchParams);
      setResetCurrentStep(false);
    }
  }, [resetCurrentStep, searchParams, setSearchParams]);

  useLayoutEffect(() => {
    setResetCurrentStep(true);
  }, [progressCategoryId]);

  const value = {
    studentData,
    currentSteps,
    selectedStep,
  };
  return (
    <StudentDetailsContext.Provider value={value}>
      {children}
    </StudentDetailsContext.Provider>
  );
};
