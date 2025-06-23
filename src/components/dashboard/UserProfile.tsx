"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useUser } from "@/store/userProfileStore";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip);

export default function UserProfile() {
  const { user, fetchUser } = useUser();

  const completion = user?.profileCompletion || 0;
  const remaining = 100 - completion;

  const data = {
    datasets: [
      {
        data: [completion, remaining],
        backgroundColor: ["#6366f1", "#e0e7ff"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    cutout: "70%",
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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex flex-col w-full sm:w-2/3 max-w-full px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative rounded-xl p-3 sm:p-4 text-gray-900 dark:text-gray-100 overflow-hidden shadow w-full max-w-full sm:max-w-sm bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 sm:gap-4">
          <div className="flex flex-col flex-1 gap-2 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full">
              <Avatar className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-indigo-200 dark:border-indigo-700 shadow-sm mb-2 sm:mb-0">
                <AvatarImage src={user?.avatarUrl} />
                <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-1 w-full">
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
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 dark:text-amber-300" />
                <span className="truncate">{user?.customerType}</span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-center sm:ml-2 relative w-full sm:w-auto"
            style={{ width: 90, height: 90 }}
          >
            <Doughnut data={data} options={options} />
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
      </motion.div>
    </div>
  );
}
