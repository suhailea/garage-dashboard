import {
  Calendar,
  CheckCircle,
  Sparkles,
  Wrench,
} from "lucide-react";

const carInfo = {
  name: "Mercedes-Benz G-Wagon",
  model: "AMG G63",
  year: 2023,
  vin: "WDB4632761X123456",
  status: "Active",
  color: "Obsidian Black Metallic",
  lastService: "2025-05-10",
  nextService: "Nov 11 2025",
  engineOil: "Due in 2,000 km",
  mileage: "18,400 km",
  features: ["4MATIC AWD", "BiTurbo V8", "Luxury Interior"],
};

const infoCards = [
  {
    icon: Wrench,
    title: "Next Service",
    value: carInfo.nextService,
    color: "bg-blue-50 dark:bg-blue-900/40",
    iconColor: "text-blue-500 dark:text-blue-300",
  },
  {
    icon: Sparkles,
    title: "Engine Oil",
    value: carInfo.engineOil,
    color: "bg-yellow-50 dark:bg-yellow-900/40",
    iconColor: "text-yellow-500 dark:text-yellow-300",
  },
  {
    icon: Calendar,
    title: "Last Service",
    value: carInfo.lastService,
    color: "bg-green-50 dark:bg-green-900/40",
    iconColor: "text-green-500 dark:text-green-300",
  },
  {
    icon: CheckCircle,
    title: "Status",
    value: carInfo.status,
    color: "bg-emerald-50 dark:bg-emerald-900/40",
    iconColor: "text-emerald-500 dark:text-emerald-300",
  },
];

export function Cardetails() {
  return (
    <div className="w-full max-w-md mx-auto rounded-b-md shadow p-6 flex flex-col gap-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg">
      {/* Top row: car name, model, year, status */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{carInfo.name}</h2>
          <div className="text-sm text-slate-500 dark:text-slate-300">
            {carInfo.model} · {carInfo.year}
          </div>
        </div>
      </div>
      {/* VIN */}
      <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 rounded px-2 w-fit font-mono">
        <span className="font-semibold">VIN:</span> {carInfo.vin}
      </div>
      {/* Info cards grid */}
      <div className="grid grid-cols-2 gap-4">
        {infoCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center rounded-2xl shadow-sm p-4 border border-gray-100 dark:border-gray-800 ${card.color}`}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${card.iconColor}`}>
              <card.icon className="w-6 h-6" />
            </div>
            <div className="font-semibold text-sm text-slate-800 dark:text-white mb-1 text-center">{card.title}</div>
            <div className="text-xs text-gray-500 dark:text-gray-300 text-center">{card.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
