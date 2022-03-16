import { ProcessorsProgressCategorySelect } from "../processors/processors-progress-category-select";

export const ProcessorsHeaderBar = () => {
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="text-background-800 text-2xl uppercase">
        Event Processors
      </div>
      <div className="flex items-center gap-4">
        <div className="text-background-800">Progress Category</div>
        <ProcessorsProgressCategorySelect />
      </div>
    </div>
  );
};
