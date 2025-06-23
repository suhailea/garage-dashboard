import { create } from "zustand";

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
};

const mockCarRecord: CarDetails = {
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

const carDetails: CarDetails = mockCarRecord;
interface CarDetailsStore {
  car: CarDetails | null;
  fetchCar: () => void;
}

export const useCarDetailsStore = create<CarDetailsStore>((set) => ({
  car: null,
  fetchCar: () => set({ car: carDetails }),
}));
