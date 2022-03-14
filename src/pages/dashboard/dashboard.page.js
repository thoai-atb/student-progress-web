import { useEffect, useState } from "react";
import { useProgressCategories } from "../../hooks/use-progress-categories";
import { useStudentYears } from "../../hooks/use-student-years";
import { useStudentsData } from "../../hooks/use-students-data";
import { AcademicYearNav } from "./academic-year-nav";
import { DashboardContent } from "./dashboard-content";
import { DashboardContext } from "./dashboard.context";
import { ProgressesNav } from "./progress-nav";

export const DashboardPage = () => {
  const [selectedProgressCategory, setSelectedProgressCategory] = useState();
  const [selectedYear, setSelectedYear] = useState("22");

  const { progressCategories } = useProgressCategories();
  const { studentYears } = useStudentYears();
  const { studentsData, isLoading: studentsDataLoading } = useStudentsData(selectedYear);

  useEffect(() => {
    if (progressCategories && progressCategories.length > 0) {
      setSelectedProgressCategory(progressCategories[0]);
    }
    setSelectedProgressCategory(progressCategories[0]);
  }, [progressCategories]);

  return (
    <DashboardContext.Provider
      value={{
        progressCategories,
        studentYears,
        studentsData,
        studentsDataLoading,
        selectedProgressCategory,
        setSelectedProgressCategory,
        selectedYear,
        setSelectedYear,
      }}
    >
      <div className="w-full h-full flex items-start flex-row text-xl">
        <AcademicYearNav />
        <ProgressesNav />
        <DashboardContent />
      </div>
    </DashboardContext.Provider>
  );
};
