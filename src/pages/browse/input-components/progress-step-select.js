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
  const [refreshStatus, setRefreshStatus] = useState(false);

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
    searchParams.set("status", option.value);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if(!refreshStatus) return;
    const value = searchParams.get("status");
    if (value) {
      const option = stepOptions.find((o) => o.value === value);
      if (option) setSelectedOption(option);
      else {
        searchParams.set("status", stepOptions[0].value);
        setSearchParams(searchParams);
        setRefreshStatus(false);
      }
    } else {
      searchParams.set("status", stepOptions[0].value);
      setSearchParams(searchParams);
      setRefreshStatus(false);
    }
  }, [searchParams, stepOptions, setSearchParams, refreshStatus]);

  useEffect(() => {
    setRefreshStatus(true);
  }, [stepOptions])

  return (
    <SelectCustom
      label="Status"
      onChange={handleChange}
      value={selectedOption}
      options={stepOptions}
    />
  );
};
