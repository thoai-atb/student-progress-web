import { ProcessorDetails } from "./processors-details";
import { ProcessorsGrid } from "./processors-grid";
import { ProcessorsHeaderBar } from "./processors-header-bar";
import { ProcessorsProvider } from "./processors.context";

export const ProcessorsPage = () => {
  return (
    <ProcessorsProvider>
      <div className="relative w-full h-full flex items-center flex-col">
        <div className="absolute inset-0 overflow-auto scrollbar-styled flex items-center flex-col pb-2">
          <div
            className="w-full flex flex-col justify-start text-background-500 text-xl px-4 p-10 gap-4"
            style={{
              maxWidth: "1400px",
            }}
          >
            <ProcessorsHeaderBar />
            <div className="flex flex-row justify-start gap-4">
              <ProcessorsGrid />
              <ProcessorDetails />
            </div>
          </div>
        </div>
      </div>
    </ProcessorsProvider>
  );
};
