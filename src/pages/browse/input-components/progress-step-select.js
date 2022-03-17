import { useEffect, useMemo, useState } from "react";
import { SelectCustom } from "../../../components/select-custom";
import { useBrowseContext } from "../browse.context";

export const ProgressStepSelect = () => {
  const {
    progressCategories,
    progressCategoryId,
    searchParams,
    setSearchParams,
  } = useBrowseContext();

  const [selectedOption, setSelectedOption] = useState(null);

  const stepOptions = useMemo(() => {
    var steps = [];
    if (progressCategories) {
      const progressCategory = progressCategories.find(
        (c) => c.id === progressCategoryId
      );
      if (progressCategory) {
        steps = progressCategory.steps.map((step) => {
          return {
            value: step.id,
            label: step.name,
          };
        });
      }
    }
    return [
      {
        value: "all",
        label: "All",
      },
      ...steps,
    ];
  }, [progressCategories, progressCategoryId]);

  function handleChange(option) {
    setSelectedOption(option);
  }

  useEffect(() => {
    if (selectedOption) {
      searchParams.set("status", selectedOption.value);
      setSearchParams(searchParams);
    }
  }, [selectedOption, searchParams, setSearchParams]);

  useEffect(() => {
    if (stepOptions) setSelectedOption(stepOptions[0]);
  }, [stepOptions]);

  return (
    <SelectCustom
      label="Status"
      onChange={handleChange}
      value={selectedOption}
      options={stepOptions}
    />
  );
};
