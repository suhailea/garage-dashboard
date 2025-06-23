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
  BarElement,
} from "chart.js";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement
);

import { useMonthlySummaryStore } from "@/store/monthlySummaryStore";
import RewardPoints from "./RewardPoints";
import Uicard from "../shared/Uicard";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { monthlySummary, fetchMonthlySummary } = useMonthlySummaryStore();

  useEffect(() => {
    fetchMonthlySummary();
  }, [fetchMonthlySummary]);

  useEffect(() => {
    let chartInstance: ChartJS | null = null;
    const currentCanvas = chartRef.current;
    const containerEl = containerRef.current;

    if (currentCanvas && monthlySummary.length > 0) {
      chartInstance = new ChartJS(currentCanvas, {
        type: "bar",
        data: {
          labels: monthlySummary.map((d) => d.month),
          datasets: [
            {
              label: "Points",
              data: monthlySummary.map((d) => d.points),
              backgroundColor: "#3b82f6",
            },
            {
              label: "Bonus",
              data: monthlySummary.map((d) => d.bonus),
              backgroundColor: "#10b981",
            },
            {
              label: "Redeemed",
              data: monthlySummary.map((d) => d.redeemed),
              backgroundColor: "#f59e42",
            },
          ],
        },
        options: chartOptions,
      });

      let resizeObserver: ResizeObserver | null = null;

      if (containerEl && chartInstance) {
        resizeObserver = new ResizeObserver(() => {
          if (chartInstance) chartInstance.resize();
        });
        resizeObserver.observe(containerEl);
      }

      return () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
        if (resizeObserver && containerEl) {
          resizeObserver.disconnect();
        }
      };
    }
  }, [monthlySummary]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 w-full rounded-lg"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-4">
        <div className="w-full lg:w-3/4" ref={containerRef}>
          <Uicard
            title="Monthly Points Summary"
            description="Monthly Points summary for the year 2025"
            style="border-none shadow-none"
          >
            <div className="bg-white dark:bg-gray-900 p-2 w-full">
              <canvas ref={chartRef} className="w-full h-[320px] min-w-0" />
            </div>
          </Uicard>
        </div>
        <div className="w-full lg:w-1/4" style={{ height: "473px" }}>
          <RewardPoints />
        </div>
      </div>
    </motion.div>
  );
}
