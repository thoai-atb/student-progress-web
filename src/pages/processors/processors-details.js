import { WhiteCard } from "../../components/white-card";
import { useProcessorsContext } from "./processors.context";

export const ProcessorDetails = () => {
  const { selectedProcessor } = useProcessorsContext();
  return (
    <WhiteCard style={{ width: "30rem", minHeight: "40rem" }}>
      {selectedProcessor && (
        <>
          <div className="text-background-800 font-bold mb-4">
            {selectedProcessor.name}
          </div>
          <div className="px-4 my-2 text-background-800">
            Processors: {selectedProcessor.processors}
          </div>
          <div className="px-4 my-2 text-background-800">
            Problems: {selectedProcessor.problems}
          </div>
          <div className="text-background-800 mt-4">
            Description
          </div>
          <div className="p-4 text-background-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi sed dictum eleifend, nunc risus aliquet nunc, eget
            dictum nunc nisi eu nisl.
          </div>
          <div className="p-4 text-background-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi sed dictum eleifend, nunc risus aliquet nunc, eget
            dictum nunc nisi eu nisl.
          </div>
        </>
      )}
    </WhiteCard>
  );
};
