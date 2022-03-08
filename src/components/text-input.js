export const TextInput = ({ title, className, isPassword }) => {
  return (
    <div className={"w-full " + className}>
      <h1 className="text-md text-background-500 mb-1">{title}</h1>
      <input
        type={isPassword ? "password" : "text"}
        className={
          "w-full h-10 p-2 border border-background-300 rounded focus:outline-primary-500 focus:outline focus:outline-1"
        }
      />
    </div>
  );
};
