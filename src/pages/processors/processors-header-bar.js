import { ProcessorsProgressCategorySelect } from "../processors/processors-progress-category-select";
import { ButtonTransparent } from "../../components/button-transparent";
import { useProcessorsContext } from "./processors.context";
import { FaSyncAlt } from "react-icons/fa";

export const ProcessorsHeaderBar = () => {
  const { setReload } = useProcessorsContext();
  function handleRefresh() {
    setReload(true);
  }
  return (
    <div className="w-full flex justify-between mb-4 items-center gap-8">
      <div className="text-background-800 text-2xl uppercase">
        Event Processors
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <div className="text-background-800">Progress Category</div>
        <ProcessorsProgressCategorySelect />
      </div>
      <ButtonTransparent
        text="Refresh"
        className="w-15 my-4"
        onClick={handleRefresh}
        icon={<FaSyncAlt />}
      />
    </div>
  );
};
