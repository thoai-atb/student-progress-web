import { useProcessorsContext } from "./processors.context";

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
        <div className="my-4 text-lg">Event Processors</div>
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
  return (
    <div
      className={`${
        active ? "border-2 border-primary-500" : " border-2 border-opacity-0"
      } bg-white shadow-sm text-background-800 rounded-lg p-4 cursor-pointer box-border h-36`}
      onClick={onSelect}
    >
      <div className="mb-4 truncate">{processorData.name}</div>
      <div className="text-lg">Processors: {processorData.processors}</div>
      <div className="text-lg">Problems: {processorData.problems}</div>
    </div>
  );
};
