import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectCustom } from "../../components/select-custom";
import { useProgressCategories } from "../../hooks/use-progress-categories";

export const ProcessorsProgressCategorySelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { progressCategories } = useProgressCategories();

  const progressOptions = useMemo(() => {
    var options = progressCategories.map((progressCategory) => ({
      value: progressCategory.id,
      label: progressCategory.name,
    }));
    return [
      {
        value: "all",
        label: "All",
      },
      ...options,
    ];
  }, [progressCategories]);

  function handleProgressCategoryChange({ value }) {
    searchParams.set("progressCategory", value);
    setSearchParams(searchParams);
  }
  return (
    <SelectCustom
      onChange={handleProgressCategoryChange}
      value={progressOptions.find(
        (o) => o.value === searchParams.get("progressCategory")
      )}
      options={progressOptions}
    />
  );
};
