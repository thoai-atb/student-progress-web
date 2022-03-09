export const WhiteCard = ({ children, className }) => {
  return (
    <div className={"w-full shadow-xl bg-white p-8 " + className}>
      {children}
    </div>
  );
};
