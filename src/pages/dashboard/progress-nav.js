import { PieChartCustom } from "../../components/pie-chart-custom";
import { useDashboardContext } from "./dashboard.context";

export const ProgressesNav = () => {
  const { selectedProgress, setSelectedProgress } = useDashboardContext();
  return (
    <div className="relative h-full w-96 bg-background-100">
      <div className="absolute inset-0 max-h-full w-full overflow-auto scrollbar-styled">
        <PieChartButton
          id="General"
          title="General"
          selectedId={selectedProgress}
          onSelectId={setSelectedProgress}
        />
        <PieChartButton
          id="Semester II 2022"
          title="Semester II 2022"
          selectedId={selectedProgress}
          onSelectId={setSelectedProgress}
        />
      </div>
    </div>
  );
};

export const PieChartButton = ({ id, selectedId, title, onSelectId }) => {
  const active = id === selectedId;
  return (
    <div
      className={
        "relative flex items-center justify-center w-full pb-10" +
        (active ? " bg-white text-background-900" : " text-background-600")
      }
      onClick={() => onSelectId(id)}
    >
      <PieChartCustom title={title} />
      {!active && <div className={"absolute w-full h-full cursor-pointer"} />}
    </div>
  );
};
