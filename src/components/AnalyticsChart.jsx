import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function AnalyticsChart({
  data,
  color = "#7c3aed"
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.1)"
        />

        <XAxis
          dataKey="metric"
          stroke="#ffffff"
        />

        <YAxis stroke="#ffffff" />

        <Tooltip
          contentStyle={{
            background: "#1f2937",
            border: "none",
            borderRadius: "12px"
          }}
        />

        <Bar
          dataKey="value"
          fill={color}
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}