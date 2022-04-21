import { WhiteCard } from "../../../components/white-card";
import { WhiteTriangleUp } from "../../../components/white-triangle-up";
import { DataTable } from "./data-table";
import { PercentBar } from "./percent-bar";
import { useStudentDetailsContext } from "./student-details.context";
import { FaCheck } from "react-icons/fa";

export const ProgressStepDescription = () => {
  const { selectedStep } = useStudentDetailsContext();
  if (!selectedStep)
    return (
      <WhiteCard>
        <div>(No steps selected)</div>
      </WhiteCard>
    );
  return (
    <WhiteCard className="relative" style={{ minHeight: 600 }}>
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
      {selectedStep.items?.length > 0 && (
        <div className="p-4 text-background-900 flex flex-col w-full gap-6">
          {selectedStep.items.map((item) => (
            <StepItem
              key={item.label}
              label={item.label}
              description={item.description}
              status={item.status}
            />
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

const StepItem = ({ label, description, status }) => {
  const checked = status === "done";
  const bgClass = checked ? "bg-success-500" : "bg-background-100";
  return (
    <div className="flex flex-row gap-8 w-full items-center">
      <div className="flex flex-col gap-4">
        <div className={`rounded-full ${bgClass} text-white p-2 text-sm`}>
          <FaCheck />
        </div>
      </div>
      <div className="text-background-900">{label}</div>
      <div className="text-background-500">{description}</div>
    </div>
  );
};
