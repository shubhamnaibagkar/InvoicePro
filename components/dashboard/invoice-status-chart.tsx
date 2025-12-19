"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Paid", value: 32, color: "hsl(var(--primary))" },
  { name: "Pending", value: 12, color: "hsl(var(--secondary))" },
  { name: "Overdue", value: 4, color: "hsl(var(--destructive))" },
]

export function InvoiceStatusChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
          }}
        />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  )
}
