"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { useUser } from "@/store/userProfileStore";
import { useEffect, useRef } from "react";

Chart.register(ArcElement, Tooltip);

export default function UserProfile() {
  const { user, fetchUser } = useUser();
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  const completion = user?.profileCompletion || 0;
  const remaining = 100 - completion;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [completion, remaining],
          backgroundColor: ["#6366f1", "#e0e7ff"],
          borderWidth: 0,
        }]
      },
      options: {
        cutout: '70%',
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
      }
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [completion, remaining]);

  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full max-w-full px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-xl p-3 sm:p-4 text-gray-900 dark:text-gray-100 overflow-hidden shadow w-full max-w-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 mx-auto"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-4 w-full">
            <Avatar className="w-16 h-16 border-2 border-indigo-200 dark:border-indigo-700 shadow-sm">
              <AvatarImage src={user?.avatarUrl} />
              <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2 mb-1 w-full">
                  <span className="text-base sm:text-lg font-bold text-gray-800 dark:text-white truncate">
                    {user?.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full font-bold text-white ${
                      user?.tier === "Gold"
                        ? "bg-yellow-400 dark:bg-yellow-600"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  >
                    {user?.tier}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400 dark:text-gray-300">
                    Level {user?.level}
                  </span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400 dark:text-gray-300">
                    Joined {user?.joinDate}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center ml-2 relative"
              style={{ width: 90, height: 90 }}
            >
              <canvas ref={chartRef} />
              <span className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs font-semibold text-indigo-800 dark:text-indigo-200">
                  {completion}%
                </span>
                <span className="text-[13px] text-gray-500 dark:text-gray-300 mt-0.5">
                  Profile
                </span>
              </span>
            </div>
          </div>
          <div className="my-1 border-t border-indigo-100 dark:border-indigo-800 w-full" />
          <div className="grid grid-cols-1 gap-1 sm:gap-2 text-sm text-gray-600 dark:text-gray-300 mb-2 w-full">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400 dark:text-indigo-300" />
              <span className="truncate">{user?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400 dark:text-indigo-300" />
              <span className="truncate">{user?.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400 dark:text-indigo-300" />
              <span className="truncate">{user?.address}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
