import { Button } from "../../components/button";
import { useDashboardContext } from "./dashboard.context";
import { useNavigate } from "react-router-dom";
import { BarChartCustom } from "../../components/bar-chart-custom";
import { FaSearch } from "react-icons/fa";
import { WhiteCard } from "../../components/white-card";
import { useMemo } from "react";

export const DashboardContent = () => {
  const navigate = useNavigate();
  const { selectedProgressCategory, selectedYear, studentDistributions } =
    useDashboardContext();
  const currentProgressStudentsData = useMemo(() => {
    if (!selectedProgressCategory) return null;
    return studentDistributions.find(
      (data) => data.progressCategoryId === selectedProgressCategory.id
    );
  }, [selectedProgressCategory, studentDistributions]);

  function handleBrowseClick() {
    navigate({
      pathname: "/browse",
      search: `?progressCategory=${
        selectedProgressCategory?.id || "all"
      }&studentYear=${selectedYear || "all"}`,
    });
  }

  if (!selectedProgressCategory) {
    return null;
  }

  return (
    <div className="relative flex-1 h-full flex flex-col items-center">
      <div className="absolute inset-0 overflow-auto scrollbar-styled p-10">
        <div className="flex justify-between items-center uppercase text-background-800 text-2xl mb-8">
          <div>
            {selectedProgressCategory.name} Progress - k{selectedYear}
          </div>
          <Button
            text="Browse"
            className="px-4"
            icon={<FaSearch />}
            onClick={handleBrowseClick}
          />
        </div>
        <div
          className="w-full shadow-xl bg-white p-4 flex items-center justify-center mb-8"
          style={{ height: 450 }}
        >
          <BarChartCustom data={currentProgressStudentsData?.data || null} />
        </div>
        <WhiteCard>
          <div className="text-background-700 font-bold mb-4">Description</div>
          <div className="p-4">{selectedProgressCategory.description}</div>
          <div className="text-background-700 font-bold my-4">
            Progress Steps
          </div>
          <div className="p-4">
            <div className="flex flex-col text-lg gap-6">
              {selectedProgressCategory.steps.map((step, index) => (
                <div className="flex" key={index}>
                  <div
                    className="font-bold"
                    style={{ width: "12rem", minWidth: "12rem" }}
                  >
                    {step.name}
                  </div>
                  <div className="">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};
