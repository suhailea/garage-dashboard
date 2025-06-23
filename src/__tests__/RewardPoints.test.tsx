import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RewardPoints from '../components/dashboard/RewardPoints';

// Mock Chart.js
jest.mock('react-chartjs-2', () => ({
  Doughnut: () => null,
}));

// Mock the store
jest.mock('@/store/rewardStore', () => ({
  useRewardStore: () => ({
    points: 100,
    nextMilestone: 200,
  }),
}));

describe('RewardPoints', () => {
  it('renders the rewards section with title and description', () => {
    render(<RewardPoints />);
    expect(screen.getByText('Rewards')).toBeInTheDocument();
    expect(screen.getByText('Earn more points to unlock exclusive rewards!')).toBeInTheDocument();
    expect(screen.getByText('How to earn points:')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });
}); 