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
        style={{ maxHeight: "40rem" }}
      >
        <div className="mb-4 text-lg">Mediators</div>
        <div className="grid grid-cols-3 gap-4" style={{ maxHeight: "40rem" }}>
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
  const { name, processors, problems } = processorData;
  const bgClass = processors > 0 ? "bg-white" : "opacity-50";
  const borderClass = active
    ? "border-2 border-primary-500"
    : "border-2 border-opacity-0";
  const problemClass = problems > 0 ? "text-error-500" : "";
  return (
    <div
      className={`${borderClass} ${bgClass} relative shadow-sm text-background-800 p-4 cursor-pointer box-border h-36`}
      onClick={onSelect}
    >
      <div className="mb-4 truncate">{name}</div>
      <div className="text-lg">Processors: {processors}</div>
      <div className={`text-lg ${problemClass}`}>Problems: {problems}</div>
      {problems > 0 && (
        <div className="absolute bottom-0 right-0 p-4 text-error-500">
          <FaExclamationTriangle />
        </div>
      )}
    </div>
  );
};
