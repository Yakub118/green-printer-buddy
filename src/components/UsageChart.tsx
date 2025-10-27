import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingDown } from "lucide-react";

const UsageChart = () => {
  const data = [
    { day: "Mon", ink: 85, paper: 120, energy: 4.2 },
    { day: "Tue", ink: 78, paper: 95, energy: 3.8 },
    { day: "Wed", ink: 72, paper: 110, energy: 4.0 },
    { day: "Thu", ink: 68, paper: 88, energy: 3.5 },
    { day: "Fri", ink: 64, paper: 75, energy: 3.2 },
    { day: "Sat", ink: 62, paper: 45, energy: 2.1 },
    { day: "Sun", ink: 64, paper: 30, energy: 1.8 },
  ];

  return (
    <Card className="p-6 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Usage Analytics</h3>
          <p className="text-sm text-muted-foreground">7-day overview</p>
        </div>
        <div className="flex items-center gap-2 text-success">
          <TrendingDown className="h-4 w-4" />
          <span className="text-sm font-medium">-18% this week</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="ink" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))" }}
            name="Ink (ml)"
          />
          <Line 
            type="monotone" 
            dataKey="paper" 
            stroke="hsl(var(--accent))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--accent))" }}
            name="Paper (sheets)"
          />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="hsl(var(--warning))" 
            strokeWidth={2}
            dot={{ fill: "hsl(var(--warning))" }}
            name="Energy (kWh)"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UsageChart;
