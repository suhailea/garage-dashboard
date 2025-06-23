import { create } from 'zustand';

export type UserProfile = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  phone?: string;
  address?: string;
  profileCompletion?: number;
  level?: number;
  tier?: string;
  joinDate?: string;
  customerType?: string;
};

const mockUserProfile: UserProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatarUrl: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=64',
  phone: '+1234567890',
  address: '123 Main St, City, Country',
  profileCompletion: 80,
  level: 12,
  tier: 'Gold',
  joinDate: '2023-01-01',
  customerType: 'Premium',
};

interface UserProfileStore {
  user: UserProfile | null;
  fetchUser: () => void;
}

export const useUser = create<UserProfileStore>((set) => ({
  user: null,
  fetchUser: () => set({ user: mockUserProfile }),
}));
