export const WhiteTriangleUp = ({ widthClass, className, hidden }) => {
  return (
    <div
      className={`${className} ${widthClass} flex items-center justify-center overflow-visible ${
        hidden ? "opacity-0" : "animate-fade-in-up"
      }`}
    >
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: "1.5rem solid transparent",
          borderRight: "1.5rem solid transparent",
          borderBottom: "1.5rem solid white",
        }}
      ></div>
    </div>
  );
};
