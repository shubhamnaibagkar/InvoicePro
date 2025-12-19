"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const data = [
  { month: "Aug", revenue: 4200 },
  { month: "Sep", revenue: 5100 },
  { month: "Oct", revenue: 6800 },
  { month: "Nov", revenue: 5900 },
  { month: "Dec", revenue: 7200 },
  { month: "Jan", revenue: 8500 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
          }}
        />
        <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
