import { useMemo } from "react";
import { SelectCustom } from "../../components/select-custom";
import { useBrowseContext } from "./browse.context";

export const ProgressStepSelect = () => {
  const {
    progressCategories,
    progressCategoryId,
    searchParams,
    setSearchParams,
  } = useBrowseContext();

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

  function handleChange({ value }) {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  }

  return (
    <SelectCustom
      label="Status"
      onChange={handleChange}
      value={
        stepOptions.find((o) => o.value === searchParams.get("status")) ||
        stepOptions?.[0]
      }
      options={stepOptions}
    />
  );
};
