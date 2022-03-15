import ReactSelect from "react-select";

const mockOptions = [
  { value: "all", label: "All" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  menu: (provided) => {
    return {
      ...provided,
      padding: "4px",
    };
  },
  menuList: (provided) => {
    return {
      ...provided,
      padding: 0,
      scrollbarColor: "#f5f5f5",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "8px",
        backgroundColor: "#f5f5f5",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#d9d9d9",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "#f5f5f5",
      },
    };
  },
};

export const SelectCustom = ({
  label,
  options = mockOptions,
  fontSize = "text-lg",
  ...props
}) => {
  return (
    <div className={"flex justify-center flex-col " + fontSize}>
      {label && <div className="mb-1">{label}</div>}
      <ReactSelect
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#a7e9f1",
            primary: "#22c7dd",
          },
        })}
        className="w-56"
        defaultValue={options[0]}
        options={options}
        {...props}
      />
    </div>
  );
};
