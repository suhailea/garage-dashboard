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
  // New benefits
  {
    id: 5,
    title: 'Amazon Prime',
    icon: 'ShoppingBag',
    discount: '20% OFF',
    bg: 'bg-yellow-50 dark:bg-yellow-900/40',
    iconColor: 'text-yellow-500 dark:text-yellow-300',
    buttonColor: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-200 dark:hover:bg-yellow-700',
  },
  {
    id: 6,
    title: 'Ola Cabs',
    icon: 'Car',
    discount: '₹75 OFF',
    bg: 'bg-cyan-50 dark:bg-cyan-900/40',
    iconColor: 'text-cyan-500 dark:text-cyan-300',
    buttonColor: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 dark:bg-cyan-800 dark:text-cyan-200 dark:hover:bg-cyan-700',
  },
  {
    id: 7,
    title: 'Flipkart Plus',
    icon: 'ShoppingBag',
    discount: '10% Cashback',
    bg: 'bg-pink-50 dark:bg-pink-900/40',
    iconColor: 'text-pink-500 dark:text-pink-300',
    buttonColor: 'bg-pink-100 text-pink-700 hover:bg-pink-200 dark:bg-pink-800 dark:text-pink-200 dark:hover:bg-pink-700',
  },
  {
    id: 8,
    title: "Domino's Pizza",
    icon: 'Utensils',
    discount: 'Buy 1 Get 1',
    bg: 'bg-red-50 dark:bg-red-900/40',
    iconColor: 'text-red-500 dark:text-red-300',
    buttonColor: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-700',
  },
  {
    id: 9,
    title: 'BigBasket',
    icon: 'ShoppingBag',
    discount: '15% OFF',
    bg: 'bg-lime-50 dark:bg-lime-900/40',
    iconColor: 'text-lime-500 dark:text-lime-300',
    buttonColor: 'bg-lime-100 text-lime-700 hover:bg-lime-200 dark:bg-lime-800 dark:text-lime-200 dark:hover:bg-lime-700',
  },
  {
    id: 10,
    title: 'RedBus',
    icon: 'Car',
    discount: '₹50 OFF',
    bg: 'bg-teal-50 dark:bg-teal-900/40',
    iconColor: 'text-teal-500 dark:text-teal-300',
    buttonColor: 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-800 dark:text-teal-200 dark:hover:bg-teal-700',
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
