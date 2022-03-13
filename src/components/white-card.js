export const WhiteCard = ({ children, className, style }) => {
  return (
    <div className={"w-full shadow-xl bg-white p-8 " + className} style={style}>
      {children}
    </div>
  );
};
