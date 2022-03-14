import { Cell, Pie, PieChart } from "recharts";

const mockData = [
  { name: "In Progress", value: 800, color: "#22c7dd" }, // primary 500
  { name: "Finished", value: 200, color: "#06f9b8" }, // success 500
  { name: "Dropped", value: 50, color: "#eb1446" }, // error 500
];

export const PieChartCustom = ({ title, data = mockData, textUnit, total }) => {
  return (
    <div className="flex flex-col items-center relative">
      <PieChart
        width={300}
        height={250}
        className="relative flex items-center justify-center"
      >
        <Pie
          data={data}
          startAngle={90}
          endAngle={-270}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
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
          width: 300,
          height: 250,
        }}
      >
        <div className="text-3xl">{total}</div>
        <div className="text-lg">{textUnit}</div>
      </div>
      <LabelLegend title={title} data={data} />
    </div>
  );
};

export const LabelLegend = ({ title, data }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-center font-bold text-xl my-2">
        {title}
      </div>
      {data.map((entry, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between text-md"
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
