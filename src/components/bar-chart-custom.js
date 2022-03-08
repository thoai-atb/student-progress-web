import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell, ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const data = [
  {
    name: "Application",
    "Students": 100,
  },
  {
    name: "Entry English",
    "Students": 30,
  },
  {
    name: "Intensive English",
    "Students": 20,
  },
  {
    name: "Credits",
    "Students": 310,
  },
  {
    name: "Thesis",
    "Students": 129,
  },
  {
    name: "Certificates",
    "Students": 56,
  },
  {
    name: "Finished",
    "Students": 100,
  },
  {
    name: "Dropped",
    "Students": 18,
  },
];

const COLORS = {
  IN_PROGRESS: "#22c7dd",
  FINISHED: "#06f9b8",
  DROPPED: "#eb1446",
};

const getColor = (name) => {
  switch (name) {
    case "Finished":
      return COLORS.FINISHED;
    case "Dropped":
      return COLORS.DROPPED;
    default:
      return COLORS.IN_PROGRESS;
  }
};

export const BarChartCustom = () => {
  return (
    <ResponsiveContainer width="100%" height="90%" className="text-sm">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          barSize={50}
          dataKey="Students"
          fill="black"
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
