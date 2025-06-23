import { create } from 'zustand';

export type Benefit = {
  id: number;
  title: string;
  icon: string; // Store icon name, not component
  discount: string;
  bg: string;
  iconColor: string;
  buttonColor: string;
};

// Mock data for benefits
const mockBenefits: Benefit[] = [
  {
    id: 1,
    title: 'Zomato Gold',
    icon: 'Utensils',
    discount: '40% OFF',
    bg: 'bg-orange-50 dark:bg-orange-900/40',
    iconColor: 'text-orange-500 dark:text-orange-300',
    buttonColor: 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-800 dark:text-orange-200 dark:hover:bg-orange-700',
  },
  {
    id: 2,
    title: 'Uber Rides',
    icon: 'Car',
    discount: '₹100 OFF',
    bg: 'bg-blue-50 dark:bg-blue-900/40',
    iconColor: 'text-blue-500 dark:text-blue-300',
    buttonColor: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-700',
  },
  {
    id: 3,
    title: 'Netflix',
    icon: 'ShoppingBag',
    discount: 'FREE',
    bg: 'bg-purple-50 dark:bg-purple-900/40',
    iconColor: 'text-purple-500 dark:text-purple-300',
    buttonColor: 'bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700',
  },
  {
    id: 4,
    title: 'Swiggy Super',
    icon: 'Utensils',
    discount: '30% OFF',
    bg: 'bg-green-50 dark:bg-green-900/40',
    iconColor: 'text-green-500 dark:text-green-300',
    buttonColor: 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-800 dark:text-green-200 dark:hover:bg-green-700',
  },
];

interface BenefitStore {
  benefits: Benefit[];
  fetchBenefits: () => void;
}

export const useBenefitStore = create<BenefitStore>((set) => ({
  benefits: [],
  fetchBenefits: () => set({ benefits: mockBenefits }),
}));
