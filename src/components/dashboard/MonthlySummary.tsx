"use client";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { useRef, useEffect } from "react";
import RewardPoints from "./RewardPoints";
import { motion } from "framer-motion";
import Uicard from "../Uicard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

import { useMonthlySummaryStore } from "@/store/monthlySummaryStore";

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
    tooltip: { mode: "index" as const, intersect: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { color: "#888", display: false },
      title: { display: false },
      grid: { display: false },
    },
    x: { ticks: { color: "#888" }, grid: { display: false } },
  },
};

export default function MonthlyPointsChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { monthlySummary, fetchMonthlySummary } = useMonthlySummaryStore();

  useEffect(() => {
    fetchMonthlySummary();
  }, [fetchMonthlySummary]);

  useEffect(() => {
    let chartInstance: ChartJS | null = null;
    if (chartRef.current && monthlySummary.length > 0) {
      chartInstance = new ChartJS(chartRef.current, {
        type: "line",
        data: {
          labels: monthlySummary.map((d) => d.month),
          datasets: [
            {
              label: "Points",
              data: monthlySummary.map((d) => d.points),
              fill: true,
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              borderColor: "#3b82f6",
              tension: 0.4,
            },
            {
              label: "Bonus",
              data: monthlySummary.map((d) => d.bonus),
              fill: true,
              backgroundColor: "rgba(16, 185, 129, 0.10)",
              borderColor: "#10b981",
              tension: 0.4,
            },
            {
              label: "Redeemed",
              data: monthlySummary.map((d) => d.redeemed),
              fill: true,
              backgroundColor: "rgba(245, 158, 66, 0.10)",
              borderColor: "#f59e42",
              tension: 0.4,
            },
          ],
        },
        options: chartOptions,
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [monthlySummary]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 w-full rounded-lg"
    >
      <div className="w-full flex items-start">
        <Uicard
          title="Monthly Points Summary"
          description="Monthly Points summary for the year 2025"
          style="border-none shadow-none"
        >
          <div className="bg-white dark:bg-gray-900 p-2">
            <canvas ref={chartRef} width={680} height={320} />
          </div>
        </Uicard>
        <div
          style={{
            height: "473px",
          }}
        >
          <RewardPoints />
        </div>
      </div>
    </motion.div>
  );
}
