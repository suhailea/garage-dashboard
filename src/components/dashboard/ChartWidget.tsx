import React from "react";
import { Card } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface ChartWidgetProps {
  data: Array<{ name: string; value: number }>;
  color?: string;
  title?: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ data, color = "#A0C4FF", title }) => {
  return (
    <Card className="p-4  rounded-xl shadow-md w-full">
      {title && <h4 className="text-md font-semibold mb-2 text-gray-700">{title}</h4>}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fill: '#b0b0b0', fontSize: 12 }} />
          <YAxis tick={{ fill: '#b0b0b0', fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: 8, border: 'none', color: '#333' }} />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={{ r: 4, fill: color }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ChartWidget;
