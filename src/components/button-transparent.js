export const ButtonTransparent = ({
  text,
  className,
  fontSize = "text-lg",
  bgColor = "",
  textColor = "text-background-800",
  hoverTextColor = "hover:text-primary-500",
  icon,
  ...rest
}) => {
  return (
    <button
      className={` 
        ${className} 
        ${bgColor} 
        ${fontSize} 
        ${textColor} 
        ${hoverTextColor} 
        p-2 rounded flex items-center justify-center 
        `}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
