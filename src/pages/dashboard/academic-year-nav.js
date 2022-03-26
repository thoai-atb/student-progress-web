import { useMemo, useState } from "react";
import { useDashboardContext } from "./dashboard.context";

export const AcademicYearNav = () => {
  const { studentYears } = useDashboardContext();
  const [showOlder, setShowOlder] = useState(false);
  const years = useMemo(() => {
    if (studentYears)
      return showOlder ? studentYears : studentYears.slice(0, 6);
  }, [studentYears, showOlder]);
  return (
    <div className="relative h-full w-16 bg-background-50">
      <div className="absolute inset-0 max-h-full w-full overflow-y-auto hide-scrollbar select-none">
        {years &&
          years.map((year) => <YearButton key={year.id} year={year.id} />)}
        <OlderButton
          text={showOlder ? "Less" : "Older"}
          onClick={() => setShowOlder((o) => !o)}
        />
      </div>
    </div>
  );
};

const YearButton = ({ year }) => {
  const { selectedYear, setSelectedYear } = useDashboardContext();
  const active = year === selectedYear;
  return (
    <div
      className={
        "relative flex items-center justify-center text-lg h-14 w-16 cursor-pointer hover:text-primary-500" +
        (active ? " bg-white text-primary-500" : " text-background-600")
      }
      onClick={() => setSelectedYear(year)}
    >
      K{year}
    </div>
  );
};

const OlderButton = ({ text, onClick }) => {
  return (
    <div
      className={
        "relative flex items-center justify-center text-base h-16 w-16 cursor-pointer hover:text-primary-500 text-background-600"
      }
      onClick={onClick}
    >
      {text}
    </div>
  );
};
