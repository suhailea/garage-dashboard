import React from "react";
import UserProfie from "./UserProfie";
import StatsWidget from "./StatsWidget";
import ChartWidget from "./ChartWidget";
import { Activity, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Activity, label: "Active Users", value: 1200, color: "#A0C4FF" },
  { icon: TrendingUp, label: "Growth", value: "+12%", color: "#BDB2FF" },
  { icon: Users, label: "Total Users", value: 5400, color: "#FFD6A5" },
];

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 700 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 900 },
  { name: "May", value: 650 },
  { name: "Jun", value: 800 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <UserProfie />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <StatsWidget key={stat.label} {...stat} />
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartWidget data={chartData} title="Monthly Activity" color="#A0C4FF" />
        {/* Add more ChartWidgets or widgets as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
