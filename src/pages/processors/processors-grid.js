import { useProcessorsContext } from "./processors.context";
import { FaExclamationTriangle } from "react-icons/fa";

export const ProcessorsGrid = () => {
  const { processors, setSelectedProcessor, selectedProcessor } =
    useProcessorsContext();
  const mediatorProcessors = processors?.filter(
    (processor) => processor.isMediator
  );
  const nonMediatorProcessors = processors?.filter(
    (processor) => !processor.isMediator
  );

  return (
    <div className="flex-1 h-full">
      <div
        className="scrollbar-styled overflow-auto pr-4"
        style={{ maxHeight: "60rem" }}
      >
        <div className="mb-4 text-lg">Mediators</div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "60rem" }}>
          {mediatorProcessors?.map((processorData) => (
            <ProcessorItem
              key={processorData.id}
              active={
                selectedProcessor && processorData.id === selectedProcessor.id
              }
              processorData={processorData}
              onSelect={() => setSelectedProcessor(processorData)}
            />
          ))}
        </div>
        <div className="mb-4 mt-8 text-lg">Event Processors</div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "40rem" }}>
          {nonMediatorProcessors?.map((processorData) => (
            <ProcessorItem
              key={processorData.id}
              active={
                selectedProcessor && processorData.id === selectedProcessor.id
              }
              processorData={processorData}
              onSelect={() => setSelectedProcessor(processorData)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProcessorItem = ({ processorData, onSelect, active }) => {
  const { name, processors, problems, resolvedProblems } = processorData;
  const unresolvedProblems = problems - resolvedProblems;
  const bgClass = processors > 0 ? "bg-primary-50" : "opacity-50";
  const borderClass = (() => {
    if (active) {
      return "border-2 border-primary-500";
    }
    if (processors > 0) {
      return "border border-primary-500";
    }
    return "border border-background-300";
  })();
  const textClass = processors > 0 ? "text-black" : "text-background-800";
  const problemClass = unresolvedProblems > 0 ? "text-error-500" : "";
  return (
    <div
      className={`${borderClass} ${bgClass} relative shadow-sm ${textClass} p-4 cursor-pointer box-border h-36`}
      onClick={onSelect}
    >
      <div className="mb-6 truncate">{name}</div>
      <div className="text-base">Processors: {processors}</div>
      <div className={`text-base ${problemClass}`}>
        Problems: {problems}{" "}
        {problems > 0 && unresolvedProblems > 0 && (
          <span>({unresolvedProblems} unfixed)</span>
        )}
        {problems > 0 && unresolvedProblems === 0 && <span>(resolved)</span>}
      </div>
      {unresolvedProblems.length > 0 && (
        <div className="absolute bottom-0 right-0 p-4 text-error-500">
          <FaExclamationTriangle />
        </div>
      )}
    </div>
  );
};
