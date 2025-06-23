import { create } from 'zustand';

export type MonthlySummary = {
  month: string;
  points: number;
  bonus: number;
  redeemed: number;
};

// Mock data for monthly summary
const mockMonthlySummary: MonthlySummary[] = [
  { month: 'Jan', points: 1200, bonus: 300, redeemed: 500 },
  { month: 'Feb', points: 900, bonus: 200, redeemed: 400 },
  { month: 'Mar', points: 1400, bonus: 350, redeemed: 600 },
  { month: 'Apr', points: 1100, bonus: 250, redeemed: 450 },
  { month: 'May', points: 1800, bonus: 400, redeemed: 700 },
  { month: 'Jun', points: 1600, bonus: 320, redeemed: 650 },
  { month: 'Jul', points: 2000, bonus: 500, redeemed: 800 },
  { month: 'Aug', points: 1750, bonus: 420, redeemed: 700 },
  { month: 'Sep', points: 1500, bonus: 300, redeemed: 600 },
  { month: 'Oct', points: 1700, bonus: 350, redeemed: 650 },
  { month: 'Nov', points: 1900, bonus: 400, redeemed: 750 },
  { month: 'Dec', points: 2100, bonus: 450, redeemed: 900 },
];

interface MonthlySummaryStore {
  monthlySummary: MonthlySummary[];
  fetchMonthlySummary: () => void;
}

export const useMonthlySummaryStore = create<MonthlySummaryStore>((set) => ({
  monthlySummary: [],
  fetchMonthlySummary: () => set({ monthlySummary: mockMonthlySummary }),
}));
