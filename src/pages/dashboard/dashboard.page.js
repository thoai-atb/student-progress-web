import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../app.context";
import { useProgressCategories } from "../../hooks/use-progress-categories";
import { useStudentYears } from "../../hooks/use-student-years";
import { useStudentDistributions } from "../../hooks/use-student-distributions";
import { AcademicYearNav } from "./academic-year-nav";
import { DashboardContext } from "./dashboard.context";
import { ProgressesNav } from "./progress-nav";

export const DashboardPage = () => {
  const [selectedProgressCategory, setSelectedProgressCategory] = useState();
  const [selectedYear, setSelectedYear] = useState("22");
  const { featuredProgressIds, setFeaturedProgressIds } = useAppContext();
  const [featuredProgresses, setFeaturedProgresses] = useState([]);

  const { progressCategories } = useProgressCategories();
  const { studentYears } = useStudentYears();
  const { studentDistributions, isLoading: studentDistributionsLoading } =
    useStudentDistributions(selectedYear);

  useEffect(() => {
    if (featuredProgresses && featuredProgresses.length > 0) {
      setSelectedProgressCategory(featuredProgresses[0]);
    }
  }, [featuredProgresses]);

  useEffect(() => {
    const progresses = [];
    for (const id of featuredProgressIds) {
      const progress = progressCategories.find((p) => p.id === id);
      if (progress) {
        progresses.push(progress);
      }
    }
    setFeaturedProgresses(progresses);
  }, [featuredProgressIds, progressCategories]);

  return (
    <DashboardContext.Provider
      value={{
        progressCategories,
        studentYears,
        studentDistributions,
        studentDistributionsLoading,
        selectedProgressCategory,
        setSelectedProgressCategory,
        selectedYear,
        setSelectedYear,
        featuredProgresses,
        setFeaturedProgressIds,
      }}
    >
      <div className="w-full h-full flex items-start flex-row text-xl">
        <AcademicYearNav />
        <ProgressesNav />
        <Outlet />
      </div>
    </DashboardContext.Provider>
  );
};
