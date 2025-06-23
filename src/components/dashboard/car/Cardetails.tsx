"use client"
import { useCarDetailsStore } from "@/store/carDetailsStore";
import { Car, CheckCircle, Gauge, Settings, Wrench, Sparkles, Calendar } from "lucide-react";
import { useEffect } from "react";

export function Cardetails() {
  const { carInfo, infoCards, fetchCar } = useCarDetailsStore();
  useEffect(() => { fetchCar(); }, [fetchCar]);

  // Map string icon names to Lucide icons (same as Benefits)
  const iconMap = {
    Wrench,
    Sparkles,
    Calendar,
    CheckCircle,
    Car,
    Gauge,
    Settings,
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-b-md shadow p-6 flex flex-col gap-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg h-[480px] overflow-y-auto">
      {/* Top row: car name, model, year, status */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
            {carInfo?.name}
          </h2>
          <div className="text-sm text-slate-500 dark:text-slate-300">
            {carInfo?.model} · {carInfo?.year}
          </div>
        </div>
      </div>

      {/* VIN */}
      <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 rounded px-2 w-fit font-mono">
        <span className="font-semibold">VIN:</span> {carInfo?.vin}
      </div>

      {/* Info cards grid */}
      <div className="grid grid-cols-2 gap-4">
        {infoCards.map((card, idx) => {
          // If card.icon is a string, use iconMap; else fallback to original
          const Icon = iconMap[card.icon as keyof typeof iconMap] || Car;
          
          return (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl shadow-sm p-4 border border-gray-100 dark:border-gray-800 ${card.color}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${card.iconColor}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="font-semibold text-sm text-slate-800 dark:text-white mb-1 text-center">
                {card.title}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-300 text-center">
                {card.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Specifications */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Specifications
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {carInfo?.specifications &&
            Object.entries(carInfo.specifications).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-slate-500 dark:text-slate-400 capitalize">
                  {key}
                </div>
                <div className="font-medium text-slate-800 dark:text-white">
                  {value}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
          <Car className="w-5 h-5" />
          Features
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {carInfo?.features?.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance History */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
          <Gauge className="w-5 h-5" />
          Maintenance History
        </h3>
        <div className="space-y-4">
          {carInfo?.maintenanceHistory?.map((record, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-500 pl-4 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-800 dark:text-white">
                  {record.service}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {record.date}
                </span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Mileage: {record.mileage}
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                {record.details}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
