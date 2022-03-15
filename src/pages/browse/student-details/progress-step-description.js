import { WhiteCard } from "../../../components/white-card";
import { WhiteTriangleUp } from "../../../components/white-triangle-up";
import { useStudentDetailsContext } from "./student-details.context";

export const ProgressStepDescription = () => {
  const { selectedStep } = useStudentDetailsContext();
  if (!selectedStep)
    return (
      <WhiteCard>
        <div>No Steps Selected</div>
      </WhiteCard>
    );
  return (
    <WhiteCard className="relative">
      <TriangleIndicator selectedStep={selectedStep} />
      <div className="text-background-700 font-bold mb-4">
        {selectedStep.name}
      </div>
      <div className="p-4 text-background-900">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem. Nulla consequat massa quis enim.
      </div>
      <div className="p-4 text-background-900">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
        quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem. Nulla consequat massa quis enim.
      </div>
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
