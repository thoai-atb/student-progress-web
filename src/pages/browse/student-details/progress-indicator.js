import { useMemo } from "react";
import { FaCheck, FaTimes, FaDotCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { WhiteCard } from "../../../components/white-card";
import { useStudentDetailsContext } from "./student-details.context";

export const ProgressIndicator = () => {
  const { selectedStep, currentSteps } = useStudentDetailsContext();
  const [searchParams, setSearchParams] = useSearchParams();
  function setSelectedStep(step) {
    if (step === selectedStep) return;
    searchParams.set("step", step.id);
    setSearchParams(searchParams);
  }
  return (
    <WhiteCard className="mb-8">
      <div className="flex flex-row justify-around items-center">
        {currentSteps.map((step, index) => {
          return (
            <LightIndicator
              key={index}
              status={step.status}
              error={step.id === "dropped"}
              isFinish={step.id === "finished"}
              title={step.name}
              selected={selectedStep && step.id === selectedStep.id}
              onClick={() => setSelectedStep(step)}
            />
          );
        })}
      </div>
    </WhiteCard>
  );
};

const LightIndicator = ({
  status,
  title,
  isFinish = false,
  error = false,
  onClick,
  selected,
}) => {
  const done = status === "done";
  const isCurrentStep = status === "current";
  const doneOrCurrent = done || isCurrentStep;
  const backgroundClassname = useMemo(() => {
    if (error && doneOrCurrent) return "bg-error-500";
    if (done || (isCurrentStep && isFinish)) return "bg-success-500";
    if (isCurrentStep) return "bg-primary-500";
    return "bg-background-100";
  }, [done, error, isCurrentStep, doneOrCurrent, isFinish]);
  const icon = useMemo(() => {
    if (error) return <FaTimes />;
    if (isFinish) return <FaCheck />;
    if (isCurrentStep) return <FaDotCircle />;
    return <FaCheck />;
  }, [error, isFinish, isCurrentStep]);
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer w-28"
      onClick={onClick}
    >
      <div
        className={`w-20 h-20 ${backgroundClassname} rounded-full flex items-center justify-center text-white text-3xl mb-4 animate-fade-in-spin duration-100`}
      >
        {icon}
      </div>
      <div className="relative text-background-800 w-28 h-6 whitespace-nowrap overflow-visible">
        <div
          className={`absolute text-lg w-0 h-0 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 flex items-center justify-center ${
            selected ? "text-primary-500" : ""
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
