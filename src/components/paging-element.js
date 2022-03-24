export const PagingElement = ({
  total,
  size,
  currentPage,
  onPageChange,
  className = "",
}) => {
  const pages = Math.ceil(total / size);
  // eslint-disable-next-line no-unused-vars
  const viewingCount = (() => {
    if (currentPage < pages) return size;
    return total - Math.max(0, pages - 1) * size;
  })();
  const pageNumbers = (() => {
    const pad = 3;
    const start = Math.min(
      Math.max(1, currentPage - pad),
      Math.max(1, pages - pad * 2)
    );
    const end = Math.min(start + pad * 2, pages);
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  })();

  return (
    <div
      className={
        "flex justify-center items-center w-full relative " + className
      }
    >
      <div className="flex items-center">
        <PagingButton
          onClick={() => onPageChange(1)}
          text="First"
          disabled={currentPage === 1}
        />
        <PagingButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          text="<"
        />
      </div>
      <div className="flex items-center">
        {pageNumbers.map((page) => (
          <PagingButton
            key={page}
            fixedWidth={true}
            onClick={() => onPageChange(page)}
            text={page}
            active={currentPage === page}
          />
        ))}
      </div>
      <div className="flex items-center">
        <PagingButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage + 1 > pages}
          text=">"
        />
        <PagingButton
          disabled={currentPage + 1 > pages}
          onClick={() => onPageChange(pages)}
          text="Last"
        />
      </div>
      <div className="absolute right-0 flex items-center">
        <span className="text-base">
          Page {currentPage} of {pages} ({total} students)
        </span>
      </div>
    </div>
  );
};

const PagingButton = ({ disabled, onClick, active, text, fixedWidth }) => {
  const disabledClass = disabled ? "opacity-50 cursor-default" : "";
  const activeClass = active ? "bg-primary-500 text-white" : "";
  const fixedWidthClass = fixedWidth ? "w-10" : "";
  const hoverClass = !disabled && !active ? "hover:text-primary-500" : "";
  function handleClick() {
    if (!disabled) {
      onClick();
    }
  }
  return (
    <button
      className={`py-2 px-4 flex items-center justify-center rounded ${disabledClass} ${activeClass} ${fixedWidthClass} ${hoverClass}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
