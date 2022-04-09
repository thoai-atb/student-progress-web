import { useMemo } from "react";
import { SelectCustom } from "../../../components/select-custom";
import { useBrowseContext } from "../browse.context";

export const ProgressCategorySelect = ({ label = "Progress Category" }) => {
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
    const status = searchParams.get("status");
    if (status && status !== "all") searchParams.set("status", "all");
    setSearchParams(searchParams);
  }

  return (
    <SelectCustom
      label={label}
      onChange={handleProgressCategoryChange}
      value={progressOptions.find(
        (o) => o.value === searchParams.get("progressCategory")
      )}
      options={progressOptions}
    />
  );
};
