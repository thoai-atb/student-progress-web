import { createContext, useContext, useEffect, useMemo, useState } from "react";
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
  const [searchParams] = useSearchParams();
  const studentId = params.studentId;
  const progressCategoryId = searchParams.get("progressCategory") || "general";
  const { studentData } = useStudentData(studentId, progressCategoryId, reload, setReload);
  const currentSteps = useMemo(
    () => studentData?.progressStatus?.progressData || [],
    [studentData]
  );
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    if (currentSteps)
      setSelectedStep(currentSteps.find((step) => step.status === "current"));
  }, [currentSteps]);

  const value = {
    studentData,
    currentSteps,
    selectedStep,
    setSelectedStep,
  };
  return (
    <StudentDetailsContext.Provider value={value}>
      {children}
    </StudentDetailsContext.Provider>
  );
};
