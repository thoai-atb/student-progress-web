import { useDashboardContext } from "./dashboard.context";

export const AcademicYearNav = () => {
  return (
    <div className="relative h-full w-16 bg-background-100">
      <div className="absolute inset-0 max-h-full w-full overflow-auto scrollbar-styled">
        <YearButton year="22" />
        <YearButton year="21" />
        <YearButton year="20" />
        <YearButton year="19" />
        <YearButton year="18" />
        <YearButton year="17" />
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
        "relative flex items-center justify-center text-xl h-16 w-16 cursor-pointer" +
        (active ? " bg-white text-primary-500" : " text-background-600")
      }
      onClick={() => setSelectedYear(year)}
    >
      K{year}
    </div>
  );
};
