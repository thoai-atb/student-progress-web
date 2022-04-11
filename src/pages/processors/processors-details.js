import { WhiteCard } from "../../components/white-card";
import { useProcessorsContext } from "./processors.context";
import { FaExclamationTriangle, FaCog } from "react-icons/fa";

export const ProcessorDetails = () => {
  const { selectedProcessor } = useProcessorsContext();
  if (!selectedProcessor) return null;
  const { name, processors, problems, services } = selectedProcessor;
  const hasProblem = problems > 0;

  return (
    <WhiteCard style={{ width: "30rem", minHeight: "40rem" }}>
      {selectedProcessor && (
        <>
          <div className="text-background-800 font-bold mb-4">{name}</div>
          <div className="px-4 my-2 text-background-800">
            Processors: {processors}
          </div>
          <div
            className={
              "px-4 my-2" +
              (hasProblem ? " text-error-500" : " text-background-800")
            }
          >
            Problems: {problems}
          </div>
          <div className="text-background-800 mt-4 font-semibold">
            Description
          </div>
          <div className="p-4 text-background-800">
            {selectedProcessor.description}
          </div>
          <div className="text-background-800 mt-4 font-semibold">
            Processors ({processors})
          </div>
          <div className="p-4 text-background-800">
            {services.map((service) => {
              const hasProblem = service.problems > 0;
              return (
                <div
                  className={
                    "flex w-full items-center mb-2" +
                    (hasProblem ? " text-error-500" : " text-background-800")
                  }
                  key={service.id}
                >
                  <div className="flex justify-center items-center mr-2 text-sm relative translate-y-1"><FaCog /></div>
                  <div className="flex items-center">{service.id}</div>
                  <div className="mx-4">
                    {service.problems > 0 && (
                      <div className="text-error-500 flex items-center gap-4 justify-center">
                        <FaExclamationTriangle /> ({service.problems})
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </WhiteCard>
  );
};
