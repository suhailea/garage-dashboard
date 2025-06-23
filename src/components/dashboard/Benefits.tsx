"use client";

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Car, ShoppingBag, Utensils } from "lucide-react";
import { useEffect } from "react";
import { useBenefitStore } from "@/store/benefitStore";

const iconMap = {
  Utensils,
  Car,
  ShoppingBag,
};

export function Benefits() {
  const { benefits, fetchBenefits } = useBenefitStore();

  useEffect(() => {
    fetchBenefits();
  }, [fetchBenefits]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="py-4"
    >
      {/* Horizontal scrollable list with snapping */}
      <div
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {benefits.map((benefit) => {
          const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Utensils;
          return (
            <motion.div
              key={benefit.id}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 snap-start w-[226px] max-w-xs"
            >
              <div
                className={`flex items-center rounded-2xl shadow-sm px-4 py-3 ${benefit.bg} relative`}
              >
                <div
                  className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full ${benefit.iconColor}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-400 dark:text-gray-300 truncate">
                    Discount: {benefit.discount}
                  </div>
                  <div className="font-semibold text-base truncate dark:text-white">
                    {benefit.title}
                  </div>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-3 cursor-pointer flex items-center justify-center bg-gray-200 rounded-full p-2">
                      <Gift className="w-5 h-5 text-primary/40" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={5} className="bg-gray-800 text-white">Claim</TooltipContent>
                </Tooltip>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
