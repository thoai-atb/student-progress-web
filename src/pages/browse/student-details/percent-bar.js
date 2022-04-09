export const PercentBar = ({ percent = 50 }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="relative flex-1 h-2 rounded-full bg-background-100">
        <div
          className={
            "h-2 rounded-full" + (percent === 100 ? " bg-success-500" : " bg-primary-500")
          }
          style={{
            width: `${percent}%`,
            transition: "width 0.2s ease-in-out",
          }}
        />
      </div>
      {
        <div className="flex items-center">
          <div className="text-background-700 text-lg">
            {percent}% Completed
          </div>
        </div>
      }
    </div>
  );
};
