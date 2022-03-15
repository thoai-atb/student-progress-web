import { SelectCustom } from "../../components/select-custom";
import { TextInput } from "../../components/text-input";
import {
  STUDENT_YEAR_OPTIONS
} from "./browse-mock-data";
import { useBrowseContext } from "./browse.context";
import { ProgressCategorySelect } from "./progress-category-select";
import { ProgressStepSelect } from "./progress-step-select";

export const FilterBar = () => {
  const { searchParams, setSearchParams } = useBrowseContext();
  function handleYearChange({ value }) {
    searchParams.set("studentYear", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="m-4 mt-8 w-full flex justify-between">
      <TextInput title="Student ID" className="w-56" searchIcon />
      <TextInput title="Student Name" className="w-56" searchIcon />
      <SelectCustom
        label="Student Year"
        onChange={handleYearChange}
        value={STUDENT_YEAR_OPTIONS.find(
          (o) => o.value === searchParams.get("studentYear")
        )}
        options={STUDENT_YEAR_OPTIONS}
      />
      <ProgressCategorySelect />
      <ProgressStepSelect />
    </div>
  );
};
