import { useMemo } from "react";

export const useDisplayStudentsData = (progresses, studentsData) => {
  const displayStudentsData = useMemo(() => {
    return progresses
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
  }, [progresses, studentsData]);
  return displayStudentsData;
};
