import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "motion/react";

const earningsData = [
  { month: "Jan", earnings: 2400 },
  { month: "Feb", earnings: 3200 },
  { month: "Mar", earnings: 2800 },
  { month: "Apr", earnings: 4100 },
  { month: "May", earnings: 3600 },
  { month: "Jun", earnings: 4800 },
  { month: "Jul", earnings: 4200 },
  { month: "Aug", earnings: 5200 },
];

function EarningsChart() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3 }}
      className="rounded-3xl border border-black/6 bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-neutral-500">
            Earnings overview
          </p>

          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-neutral-950">
            Monthly earnings
          </h2>
        </div>

        <button
          type="button"
          className="rounded-xl border border-black/6 px-3 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          This year
        </button>
      </div>

      <div className="mt-8 h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={earningsData}
            margin={{
              top: 8,
              right: 4,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#E5E5E5"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#A3A3A3",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#A3A3A3",
                fontSize: 12,
              }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            <Tooltip
              cursor={{ fill: "rgba(99, 91, 255, 0.04)" }}
              contentStyle={{
                borderRadius: "14px",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Earnings",
              ]}
            />

            <Bar
              dataKey="earnings"
              fill="#635BFF"
              radius={[8, 8, 3, 3]}
              maxBarSize={42}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}

export default EarningsChart;
