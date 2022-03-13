import { SelectCustom } from "../../components/select-custom";
import { PROGRESS_OPTIONS } from "../browse/browse-mock-data";

export const ProcessorsHeaderBar = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="text-background-800 text-2xl uppercase">Event Processors</div>
      <div className="flex items-center gap-4">
        <div className="text-background-800">Progress Category</div>
        <SelectCustom options={PROGRESS_OPTIONS} />
      </div>
    </div>
  );
};
