import { PagingElement } from "../../components/paging-element";
import { BrowseTable } from "./browse-table";
import { useBrowseContext } from "./browse.context";
import { FilterBar } from "./filter-bar";

export const BrowseList = () => {
  const { page, setPage, pageSize, total } = useBrowseContext();
  return (
    <>
      <FilterBar />
      <BrowseTable />
      <PagingElement
        className="mt-4"
        total={total}
        currentPage={page}
        onPageChange={setPage}
        size={pageSize}
      />
    </>
  );
};
