"use client";

import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRewardStore } from "@/store/rewardStore";

ChartJS.register(ArcElement, Tooltip);

export default function RewardPoints() {
  const { points, nextMilestone } = useRewardStore();
  const remaining = nextMilestone - points;

  const data = {
    datasets: [
      {
        data: [points, remaining],
        backgroundColor: ["#6366f1", "#e0e7ff"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    elements: {
      arc: {
        borderRadius: 20,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-r-lg bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 border-indigo-100 dark:border-gray-800 p-4 flex flex-col items-center w-full max-w-xs mx-auto h-full"
    >
      <div className="flex items-center gap-2 mb-2 w-full justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
            <Gift className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />
          </div>
          <h2 className="text-base font-semibold text-indigo-800 dark:text-indigo-200 ml-2">
            Rewards
          </h2>
        </div>
      </div>
      <p className="text-sm text-indigo-600 dark:text-indigo-300 mb-4 text-center">
        Earn more points to unlock exclusive rewards!
      </p>
      <div
        className="flex flex-col items-center mb-4 relative"
        style={{ width: 120, height: 120 }}
      >
        <Doughnut data={data} options={options} />
        {/* Centered points text */}
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-indigo-800 dark:text-indigo-200">
          {points}
        </span>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        Next reward at{" "}
        <b className="text-indigo-700 dark:text-indigo-300">{nextMilestone}</b>{" "}
        points
      </span>
      {/* Last redeemed info */}
      <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 mb-2">
        Last redeemed: 2 days ago
      </span>
      {/* How to earn points section */}
      <div className="mt-5 w-full">
        <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
          How to earn points:
        </h3>
        <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1">
          <li>Complete your profile</li>
          <li>Refer a friend</li>
        </ul>
      </div>
      <Button className="w-full mt-6 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:text-indigo-200 rounded-full px-4 py-1 h-10 flex items-center justify-center font-semibold shadow-none border border-indigo-100 dark:border-indigo-800 text-sm">
        Redeem <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </motion.div>
  );
}
