import { memo, useCallback, useMemo } from "react";
import { PieChartCustom } from "../../components/pie-chart-custom";
import { useDashboardContext } from "./dashboard.context";

export const ProgressesNav = () => {
  const {
    selectedProgressCategory,
    setSelectedProgressCategory,
    progressCategories,
    studentsData,
  } = useDashboardContext();

  const displayProgressList = useMemo(() => {
    return progressCategories
      .map((category) => {
        const metadata = studentsData.find(
          (data) => data.progressCategoryId === category.id
        );
        if (!metadata) return null;
        const total = metadata.data.reduce(
          (acc, curr) => acc + curr.students,
          0
        );
        const finishedCount = metadata.data.find(
          (step) => step.id === "finished"
        ).students;
        const droppedCount = metadata.data.find(
          (step) => step.id === "dropped"
        ).students;
        const displayData = {
          category,
          total,
          inProgress: total - finishedCount - droppedCount,
          finished: finishedCount,
          dropped: droppedCount,
        };
        return displayData;
      })
      .filter((category) => category);
  }, [progressCategories, studentsData]);

  function handleClick(category) {
    setSelectedProgressCategory(category);
  }

  return (
    <div className="relative h-full w-96 bg-background-50">
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
          data={pieChartData}
          textUnit="students"
          total={displayData.total}
        />
        {!active && <div className={"absolute w-full h-full cursor-pointer"} />}
      </div>
    );
  }
);
