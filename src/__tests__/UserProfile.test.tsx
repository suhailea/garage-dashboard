import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/dashboard/UserProfile';

// Mock Chart.js
jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}));

// Mock the store
jest.mock('@/store/userProfileStore', () => ({
  useUser: () => ({
    user: {
      name: 'John Doe',
      level: 5,
      tier: 'Gold',
      joinDate: '2024-01-01',
      profileCompletion: 75,
    },
    fetchUser: jest.fn(),
  }),
}));

describe('UserProfile', () => {
  it('renders the user profile with level and profile completion', () => {
    render(<UserProfile />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Level 5')).toBeInTheDocument();
    expect(screen.getByText('Gold')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
}); 