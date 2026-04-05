import DebitCard from "./DebitCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { name: "Jan", income: 400, expense: 240 },
  { name: "Feb", income: 300, expense: 139 },
  { name: "Mar", income: 500, expense: 300 },
  { name: "Apr", income: 700, expense: 200 },
];

// 👉 Category Data
const pieData = [
  { name: "Food", value: 400 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 300 },
  { name: "Bills", value: 200 },
];

// 👉 Colors
const COLORS = ["#4f46e5", "#f59e0b", "#22c55e", "#ef4444"];

export default function ChartSection() {
  return (
    <>
      <div className="chart-section">
        {/* LINE CHART */}
        <div className="chart-box">
          <h3>Your Assets</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#4CAF50" />
              <Line type="monotone" dataKey="expense" stroke="#FFC107" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* CARD */}
        <div className="card-box">
        <h3>My Card</h3>
        <DebitCard />
        </div>
      </div>

      {/* 👉 NEW PIE CHART SECTION */}
      <div className="chart-section">
        <div className="chart-box">
          <h3>Expense Categories</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}