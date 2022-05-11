import { WhiteCard } from "../../components/white-card";
import { useProcessorsContext } from "./processors.context";
import { FaExclamationTriangle, FaCircleNotch } from "react-icons/fa";

export const ProcessorDetails = () => {
  const { selectedProcessor } = useProcessorsContext();
  if (!selectedProcessor) return null;
  const { name, processors, problems, resolvedProblems, services } =
    selectedProcessor;
  const unresolvedProblems = problems - resolvedProblems;

  return (
    <WhiteCard style={{ width: "30rem", minHeight: "60rem" }}>
      {selectedProcessor && (
        <>
          <div className="text-background-800 font-bold mb-4">{name}</div>
          <div className="px-4 my-2 text-background-800">
            Processors: {processors}
          </div>
          <div
            className={
              "px-4 my-2" +
              (unresolvedProblems > 0
                ? " text-error-500"
                : " text-background-800")
            }
          >
            Problems: {problems}{" "}
            {problems > 0 && unresolvedProblems > 0 && (
              <span>({unresolvedProblems} unfixed)</span>
            )}
            {problems > 0 && unresolvedProblems === 0 && (
              <span>(resolved)</span>
            )}
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
              const hasProblem = service.problems.length > 0;
              const hasUnresolvedProblem =
                service.problems.filter((p) => !p.resolved).length > 0;
              return (
                <div
                  className={
                    "flex flex-col w-full items-center mb-2" +
                    (hasUnresolvedProblem
                      ? " text-error-500"
                      : " text-background-800")
                  }
                  key={service.id}
                >
                  <div className={"flex flex-row w-full items-center mb-2"}>
                    <div className="flex justify-center items-center mr-2 text-sm relative translate-y-1">
                      <FaCircleNotch />
                    </div>
                    <div className="flex items-center">{service.id}</div>
                    <div className="mx-4">
                      {hasUnresolvedProblem && (
                        <div className="text-error-500 flex items-center gap-4 justify-center">
                          <FaExclamationTriangle />
                        </div>
                      )}
                    </div>
                  </div>
                  {hasProblem && (
                    <div className="flex w-full flex-col ml-4 my-4 bg-warning-50 max-h-96 overflow-scroll text-base">
                      {service.problems.map((problem) => {
                        const resolved = problem.resolved;
                        return (
                          <div className="flex w-full p-4" key={problem.id}>
                            <div
                              className={
                                "flex items-center mr-2" +
                                (resolved
                                  ? " text-background-800"
                                  : " text-error-500")
                              }
                            >
                              {problem.message}
                            </div>
                            {resolved ? (
                              <div className="flex items-center text-warning-500">
                                (fixed)
                              </div>
                            ) : (
                              <div className="flex items-center text-error-500">
                                <FaExclamationTriangle />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </WhiteCard>
  );
};
