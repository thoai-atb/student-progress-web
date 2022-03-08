import { PieChartCustom } from "../../components/pie-chart-custom";

export const PieChartButton = ({ id, selectedId, title, onSelectId }) => {
  const active = id === selectedId;
  return (
    <div
      className={
        "relative flex items-center justify-center w-full pb-10" +
        (active
          ? " bg-white text-background-900"
          : " text-background-600")
      }
      onClick={() => onSelectId(id)}
    >
      <PieChartCustom title={title} />
      {!active && <div className={"absolute w-full h-full cursor-pointer"} />}
    </div>
  );
};
