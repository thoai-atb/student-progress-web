import { useMemo } from "react";
import { SelectCustom } from "../../../components/select-custom";
import { useBrowseContext } from "../browse.context";

export const ProgressCategorySelect = () => {
  const { searchParams, setSearchParams } = useBrowseContext();
  const { progressCategories } = useBrowseContext();

  const progressOptions = useMemo(() => {
    return progressCategories.map((progressCategory) => ({
      value: progressCategory.id,
      label: progressCategory.name,
    }));
  }, [progressCategories]);

  function handleProgressCategoryChange({ value }) {
    searchParams.set("progressCategory", value);
    setSearchParams(searchParams);
  }

  return (
    <SelectCustom
      label="Progress Category"
      onChange={handleProgressCategoryChange}
      value={progressOptions.find(
        (o) => o.value === searchParams.get("progressCategory")
      )}
      options={progressOptions}
    />
  );
};
