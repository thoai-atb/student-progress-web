import { BrowseTable } from "./browse-table";
import { useBrowseContext } from "./browse.context";
import { FilterBar } from "./filter-bar";

export const BrowseList = () => {
  const { isLoading } = useBrowseContext();
  return (
    <>
      <FilterBar />
      {!isLoading && <BrowseTable />}
    </>
  );
};
