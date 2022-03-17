import { SelectCustom } from "../../components/select-custom";
import {
  STUDENT_YEAR_OPTIONS
} from "./browse-mock-data";
import { useBrowseContext } from "./browse.context";
import { ProgressCategorySelect } from "./input-components/progress-category-select";
import { ProgressStepSelect } from "./input-components/progress-step-select";
import { SearchParamInput } from "./input-components/search-param-input";

export const FilterBar = () => {
  const { searchParams, setSearchParams } = useBrowseContext();
  function handleYearChange({ value }) {
    searchParams.set("studentYear", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="m-4 mt-8 w-full flex justify-between">
      <SearchParamInput title="Student ID" param="studentId" />
      <SearchParamInput title="Student Name" param="studentName" />
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
