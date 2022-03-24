import { WhiteCard } from "../../../components/white-card";
import { WhiteTriangleUp } from "../../../components/white-triangle-up";
import { DataTable } from "./data-table";
import { PercentBar } from "./percent-bar";
import { useStudentDetailsContext } from "./student-details.context";

export const ProgressStepDescription = () => {
  const { selectedStep } = useStudentDetailsContext();
  if (!selectedStep)
    return (
      <WhiteCard>
        <div>(No steps selected)</div>
      </WhiteCard>
    );
  return (
    <WhiteCard className="relative">
      <TriangleIndicator selectedStep={selectedStep} />
      <div className="text-background-700 font-bold mb-4">
        {selectedStep.name}
      </div>
      <div className="p-4 text-background-900">
        <div className="text-background-900 my-2">
          <span className="font-bold mr-2">Description:</span>
          <span className="">{selectedStep.description}</span>
        </div>
        <div className="text-background-900 my-2">
          <span className="font-bold mr-2">Status:</span>
          <span className="">{selectedStep.statusName}</span>
        </div>
      </div>
      {selectedStep.progress !== undefined && (
        <div className="p-4 text-background-900">
          <PercentBar percent={selectedStep.progress} />
        </div>
      )}
      {selectedStep.info !== undefined && (
        <div className="p-4 text-background-900 flex gap-4">
          {selectedStep.info.map((info) => (
            <DataTable key={info.title} title={info.title} data={info.data} />
          ))}
        </div>
      )}
    </WhiteCard>
  );
};

const TriangleIndicator = ({ selectedStep }) => {
  const { currentSteps } = useStudentDetailsContext();
  return (
    <div className="absolute bottom-full left-0 w-full flex flex-row justify-around items-center px-8">
      {currentSteps.map((step) => {
        const selected = step.id === selectedStep.id;
        return (
          <WhiteTriangleUp
            widthClass="w-28"
            className=""
            key={`step_${step.name}`}
            hidden={!selected}
          />
        );
      })}
    </div>
  );
};
