import { SelectCustom } from "../../components/select-custom";
import { TextInput } from "../../components/text-input";
import {
  PROGRESS_OPTIONS,
  STEP_OPTIONS,
  STUDENT_YEAR_OPTIONS,
} from "./browse-mock-data";

export const FilterBar = () => {
  return (
    <div className="m-4 mt-8 w-full flex justify-between">
      <TextInput title="Student ID" className="w-56" searchIcon />
      <TextInput title="Student Name" className="w-56" searchIcon />
      <SelectCustom label="Student Year" options={STUDENT_YEAR_OPTIONS} />
      <SelectCustom label="Progress" options={PROGRESS_OPTIONS} />
      <SelectCustom label="Step" options={STEP_OPTIONS} />
    </div>
  );
};
