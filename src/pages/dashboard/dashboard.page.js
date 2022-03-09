import { useState } from "react";
import { AcademicYearNav } from "./academic-year-nav";
import { DashboardContent } from "./dashboard-content";
import { DashboardContext } from "./dashboard.context";
import { ProgressesNav } from "./progress-nav";

export const DashboardPage = () => {
  const [selectedProgress, setSelectedProgress] = useState("General");
  const [selectedYear, setSelectedYear] = useState("22");
  return (
    <DashboardContext.Provider
      value={{
        selectedProgress,
        setSelectedProgress,
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
