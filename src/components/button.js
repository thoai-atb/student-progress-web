export const Button = ({ text, className, icon, ...rest }) => {
  return (
    <button
      className={
        "bg-primary-500 text-white p-2 rounded flex items-center justify-center " +
        className
      }
      {...rest}
    >
      <span className="mr-2">{icon && icon}</span>
      <span>{text}</span>
    </button>
  );
};
