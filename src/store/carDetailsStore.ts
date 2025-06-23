import { create } from "zustand";

// Define a type for info cards if needed in components
export type InfoCard = {
  icon: string;
  title: string;
  value: string;
  color: string;
  iconColor: string;
};

export type CarDetails = {
  name: string;
  model: string;
  year: number;
  vin: string;
  status: string;
  color: string;
  lastService: string;
  nextService: string;
  engineOil: string;
  mileage: string;
  features: string[];
  specifications: {
    engine: string;
    power: string;
    torque: string;
    transmission: string;
    acceleration: string;
    topSpeed: string;
  };
  maintenanceHistory: {
    date: string;
    service: string;
    mileage: string;
    details: string;
  }[];
};

const CarRecord: CarDetails = {
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
  features: [
    "4MATIC AWD",
    "BiTurbo V8",
    "Luxury Interior",
    "Night Package",
    "AMG Driver's Package",
    "Burmester® Surround Sound",
  ],
  specifications: {
    engine: "4.0L V8 BiTurbo",
    power: "577 hp @ 6,000 rpm",
    torque: "627 lb-ft @ 2,500-3,500 rpm",
    transmission: "9G-TRONIC",
    acceleration: "0-60 mph in 4.5s",
    topSpeed: "149 mph (limited)",
  },
  maintenanceHistory: [
    {
      date: "2024-01-15",
      service: "Regular Maintenance",
      mileage: "15,000 km",
      details: "Oil change, filter replacement, brake inspection",
    },
    {
      date: "2023-08-20",
      service: "Tire Rotation",
      mileage: "10,000 km",
      details: "All-wheel alignment, tire pressure adjustment",
    },
  ],
};

const infoCardsMock: InfoCard[] = [
  {
    icon: "Wrench",
    title: "Next Service",
    value: CarRecord.nextService,
    color: "bg-blue-50 dark:bg-blue-900/40",
    iconColor: "text-blue-500 dark:text-blue-300",
  },
  {
    icon: "Sparkles",
    title: "Engine Oil",
    value: CarRecord.engineOil,
    color: "bg-yellow-50 dark:bg-yellow-900/40",
    iconColor: "text-yellow-500 dark:text-yellow-300",
  },
  {
    icon: "Calendar",
    title: "Last Service",
    value: CarRecord.lastService,
    color: "bg-green-50 dark:bg-green-900/40",
    iconColor: "text-green-500 dark:text-green-300",
  },
  {
    icon: "CheckCircle",
    title: "Status",
    value: CarRecord.status,
    color: "bg-emerald-50 dark:bg-emerald-900/40",
    iconColor: "text-emerald-500 dark:text-emerald-300",
  },
];

interface CarDetailsStore {
  carInfo: CarDetails | null;
  infoCards: InfoCard[];
  fetchCar: () => void;
}

export const useCarDetailsStore = create<CarDetailsStore>((set) => ({
  carInfo: null,
  infoCards: infoCardsMock,
  fetchCar: () => set({ carInfo: CarRecord }),
}));
