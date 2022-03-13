import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../components/button-secondary";
import { SelectCustom } from "../../components/select-custom";
import { WhiteCard } from "../../components/white-card";
import { WhiteTriangleUp } from "../../components/white-triangle-up";
import { GENERAL_STEPS, PROGRESS_OPTIONS } from "./browse-mock-data";

export const StudentDetails = () => {
  const navigate = useNavigate();
  const [selectedStep, setSelectedStep] = useState(GENERAL_STEPS[0]);

  function handleMyBack() {
    navigate(-1);
  }

  useEffect(() => {
    console.log(selectedStep);
  }, [selectedStep]);

  return (
    <div className="relative w-full h-full">
      <div className="flex items-center justify-between my-4">
        <ButtonSecondary
          text="Back to Browse"
          className="w-15 my-4"
          onClick={handleMyBack}
          icon={<FaArrowLeft />}
        />
        <div className="flex items-center gap-4">
          <div className="text-background-800">Progress Category</div>
          <SelectCustom options={PROGRESS_OPTIONS} />
        </div>
      </div>
      <WhiteCard className="mb-8">
        <div className="text-background-700 font-bold mb-4">Student Info</div>
        <div className="px-4 flex gap-8">
          <div>
            <InfoField label="ID" value="ITITIU18000" />
            <InfoField label="Name" value="Nguyen Van A" />
          </div>
          <div>
            <InfoField label="Student Year" value="K18" />
            <InfoField label="Current Progress" value="Thesis" />
          </div>
        </div>
      </WhiteCard>
      <WhiteCard className="mb-8">
        <ProgressIndicator
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />
      </WhiteCard>
      <WhiteCard className="relative">
        <TriangleIndicator selectedStep={selectedStep} />
        <div className="text-background-700 font-bold mb-4">
          {selectedStep.name}
        </div>
        <div className="p-4 text-background-900">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim.
        </div>
        <div className="p-4 text-background-900">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor
          sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
          enim.
        </div>
      </WhiteCard>
    </div>
  );
};

const InfoField = ({ label, value }) => {
  return (
    <div className="text-background-900 my-2">
      <span className="font-bold mr-2">{label}:</span>
      <span className="">{value}</span>
    </div>
  );
};

const ProgressIndicator = ({ selectedStep, setSelectedStep }) => {
  return (
    <div className="flex flex-row justify-around items-center">
      {GENERAL_STEPS.map((step, index) => {
        return (
          <LightIndicator
            key={index}
            checked={step.status === "done"}
            error={step.isError}
            title={step.name}
            selected={step.name === selectedStep.name}
            onClick={() => setSelectedStep(step)}
          />
        );
      })}
    </div>
  );
};

const LightIndicator = ({
  checked,
  title,
  error = false,
  onClick,
  selected,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer w-28"
      onClick={onClick}
    >
      <div
        className={`w-20 h-20 ${
          checked ? (error ? "bg-error-500" : "bg-success-500") : " bg-gray-200"
        } ${
          selected ? "transform scale-110" : ""
        } rounded-full flex items-center justify-center text-white text-3xl mb-4 animate-fade-in-spin duration-100`}
      >
        {error ? <FaTimes /> : <FaCheck />}
      </div>
      <div className="relative text-background-800 w-28 h-6 whitespace-nowrap overflow-visible">
        <div
          className={`absolute w-0 h-0 top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 flex items-center justify-center ${
            selected ? "text-primary-500" : ""
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const TriangleIndicator = ({ selectedStep }) => {
  return (
    <div className="absolute bottom-full left-0 w-full flex flex-row justify-around items-center px-8">
      {GENERAL_STEPS.map((step) => {
        const selected = step.name === selectedStep.name;
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
