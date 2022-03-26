import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const COLORS = {
  IN_PROGRESS: "#22c7dd",
  FINISHED: "#06f9b8",
  DROPPED: "#eb1446",
};

const getColor = (name) => {
  switch (name) {
    case "finished":
      return COLORS.FINISHED;
    case "dropped":
      return COLORS.DROPPED;
    default:
      return COLORS.IN_PROGRESS;
  }
};

export const BarChartCustom = ({ data }) => {
  if (!data) return null;
  const displayData = data; // convertData(data);
  return (
    <ResponsiveContainer width="100%" height="90%" className="text-sm">
      <BarChart
        width={500}
        height={300}
        data={displayData}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          barSize={50}
          dataKey="students"
          fill="black"
          label={{ position: "top" }}
          name="Students"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.id)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
