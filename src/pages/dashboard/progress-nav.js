import { memo, useCallback } from "react";
import { FaRegSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PieChartCustom } from "../../components/pie-chart-custom";
import { useDashboardContext } from "./dashboard.context";
import { useDisplayStudentsData } from "./use-display-students-data";

export const ProgressesNav = () => {
  const {
    selectedProgressCategory,
    setSelectedProgressCategory,
    featuredProgresses,
    studentDistributions,
  } = useDashboardContext();

  const displayProgressList = useDisplayStudentsData(
    featuredProgresses,
    studentDistributions
  );

  function handleClick(category) {
    setSelectedProgressCategory(category);
  }

  return (
    <div
      className="relative h-full bg-background-50 flex flex-col"
      style={{
        width: 350,
      }}
    >
      <FeaturedHeader />
      <div className="relative flex-1">
        <div className="absolute inset-0 max-h-full w-full overflow-auto scrollbar-styled">
          {displayProgressList.map((displayData) => {
            const { category } = displayData;
            return (
              <PieChartButton
                category={category}
                key={category.id}
                title={category.name}
                selected={
                  selectedProgressCategory &&
                  category.id === selectedProgressCategory.id
                }
                displayData={displayData}
                onClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FeaturedHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex group items-center h-12 px-4 text-background-600 justify-center bg-background-25 text-lg">
      <div>Featured progresses</div>
      <div
        className="flex group-hover:flex absolute right-0 h-full justify-center items-center hover:text-primary-500 cursor-pointer px-4"
        onClick={() => navigate("settings")}
      >
        <FaRegSun />
      </div>
    </div>
  );
};

export const PieChartButton = memo(
  ({ title, selected, displayData, onClick, category }) => {
    const active = selected;
    const pieChartData = [
      { name: "In Progress", value: displayData.inProgress, color: "#22c7dd" }, // primary 500
      { name: "Finished", value: displayData.finished, color: "#06f9b8" }, // success 500
      { name: "Dropped", value: displayData.dropped, color: "#eb1446" }, // error 500
    ];
    const handleClick = useCallback(() => {
      onClick(category);
    }, [category, onClick]);
    return (
      <div
        className={
          "relative flex items-center justify-center w-full pb-10" +
          (active ? " bg-white text-background-900" : " text-background-600")
        }
        onClick={handleClick}
      >
        <PieChartCustom
          title={title}
          active={active}
          data={pieChartData}
          textUnit="students"
          total={displayData.total}
        />
        {!active && (
          <div className={"absolute w-full h-full cursor-pointer top-0"} />
        )}
      </div>
    );
  }
);
