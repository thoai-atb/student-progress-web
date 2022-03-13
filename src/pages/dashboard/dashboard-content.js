import { Button } from "../../components/button";
import { useDashboardContext } from "./dashboard.context";
import { useNavigate } from "react-router-dom";
import { BarChartCustom } from "../../components/bar-chart-custom";
import { FaSearch } from "react-icons/fa";
import { WhiteCard } from "../../components/white-card";

const steps = [
  {
    name: "Application",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Entry English",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Intensive English",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Credits",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Thesis",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Certificates",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    name: "Finished",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

export const DashboardContent = () => {
  const navigate = useNavigate();
  const { selectedProgress, selectedYear } = useDashboardContext();
  function handleBrowseClick() {
    navigate("/browse");
  }
  return (
    <div className="relative flex-1 h-full flex flex-col items-center">
      <div className="absolute inset-0 overflow-auto scrollbar-styled p-10">
        <div className="flex justify-between items-center uppercase text-background-800 text-2xl mb-8">
          <div>
            {selectedProgress} Progress - k{selectedYear}
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
          <BarChartCustom />
        </div>
        <WhiteCard>
          <div className="text-background-700 font-bold mb-4">Description</div>
          <div className="p-4">
            General progress is lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim.
          </div>
          <div className="text-background-700 font-bold mb-4">
            Progress Steps
          </div>
          <div className="p-4">
            <div className="flex flex-col text-lg gap-6">
              {steps.map((step, index) => (
                <div className="flex" key={index}>
                  <div className="font-bold w-48">{step.name}</div>
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
