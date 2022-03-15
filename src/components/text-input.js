import { FaSearch } from "react-icons/fa";

export const TextInput = ({
  title,
  className,
  isPassword,
  fontSize = "text-lg",
  searchIcon = false,
  ...props
}) => {
  return (
    <div className={"w-full " + className}>
      <h1 className={"text-background-500 mb-1 " + fontSize}>{title}</h1>
      <div className="relative">
        <input
          type={isPassword ? "password" : "text"}
          className={
            "w-full h-10 p-2 border border-background-300 text-background-800 rounded focus:outline-primary-500 focus:outline focus:outline-2" +
            (searchIcon ? " pl-10" : "")
          }
          {...props}
        />
        {searchIcon && (
          <div className="absolute inset-0 h-full flex items-center pl-4 text-sm font-thin pointer-events-none">
            <FaSearch />
          </div>
        )}
      </div>
    </div>
  );
};
