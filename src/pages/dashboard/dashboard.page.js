import { useState } from "react";
import { BarChartCustom } from "../../components/bar-chart-custom";
import { Button } from "../../components/button";
import { PieChartButton } from "./progress-nav";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

export const DashboardPage = () => {
  const [selectedId, setSelectedId] = useState("General");
  const navigate = useNavigate();
  function handleBrowseClick() {
    navigate("/browse");
  }
  return (
    <div className="w-full h-full flex items-start flex-row text-xl">
      <div className="relative h-full w-96 bg-background-100">
        <div className="absolute inset-0 max-h-full w-full overflow-auto scrollbar-styled scrollbar-left">
          <PieChartButton
            id="General"
            title="General"
            selectedId={selectedId}
            onSelectId={setSelectedId}
          />
          <PieChartButton
            id="Semester II 2020"
            title="Semester II 2020"
            selectedId={selectedId}
            onSelectId={setSelectedId}
          />
        </div>
      </div>
      <div className="relative flex-1 h-full flex flex-col items-center">
        <div className="absolute inset-0 overflow-auto scrollbar-styled p-10">
          <div className="flex justify-between items-center uppercase text-background-800 text-2xl mb-8">
            <div>{selectedId} Progress</div>
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
          <div className="w-full shadow-xl bg-white p-8">
            <div className="text-background-700 font-bold my-4">
              Description
            </div>
            <div className="p-4">
              General progress is lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </div>
            <div className="text-background-700 font-bold my-4">
              Progress Steps
            </div>
            <div className="p-4">
              <div className="grid grid-cols-6 gap-6 text-lg">
                {steps.map((step, index) => (
                  <>
                    <div key={index + "_a"} className="font-bold">
                      {step.name}
                    </div>
                    <div key={index + "_b"} className="col-span-5">
                      {step.description}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
