import { Cell, Pie, PieChart } from "recharts";

const mockData = [
  { name: "In Progress", value: 800, color: "#22c7dd" }, // primary 500
  { name: "Finished", value: 200, color: "#06f9b8" }, // success 500
  { name: "Dropped", value: 50, color: "#eb1446" }, // error 500
];

export const PieChartCustom = ({
  title,
  data = mockData,
  textUnit,
  total,
  active,
}) => {
  const height = 220;
  const width = 300;
  return (
    <div className="flex flex-col items-center relative mt-2">
      <PieChart
        width={width}
        height={height}
        className="relative flex items-center justify-center"
      >
        <Pie
          data={data}
          startAngle={90}
          endAngle={-270}
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          stroke="none"
          animationDuration={500}
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div
        className="absolute w-full h-full inset-0 flex items-center flex-col justify-center"
        style={{
          width: width,
          height: height,
        }}
      >
        <div className="text-3xl">{total}</div>
        <div className="text-lg">{textUnit}</div>
      </div>
      <LabelLegend active={active} title={title} data={data} />
    </div>
  );
};

export const LabelLegend = ({ title, data, active }) => {
  return (
    <div className="w-full flex flex-col">
      <div
        className={
          "flex items-center justify-center font-bold text-xl mb-4" +
          (active ? " text-primary-500" : "")
        }
      >
        {title}
      </div>
      {data.map((entry, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between text-lg"
          >
            <div className="flex gap-2 items-center">
              <div
                className="w-4 h-4 inline-block"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span>{entry.name}</span>
            </div>
            <div>
              <span>{entry.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
