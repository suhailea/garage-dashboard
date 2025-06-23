import { create } from "zustand";

// Mock data
const rewardPoints = 4500;
const nextMilestone = 5000;

interface RewardStore {
  points: number;
  nextMilestone: number;
  setPoints: (points: number) => void;
}

export const useRewardStore = create<RewardStore>((set) => ({
  points: rewardPoints,
  nextMilestone,
  setPoints: (points) => set({ points }),
}));
