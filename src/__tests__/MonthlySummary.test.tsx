import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MonthlyPointsChart from '../components/dashboard/MonthlySummary';

// Mock Chart.js
jest.mock('chart.js/auto', () => ({
  Chart: class {
    constructor() {}
    destroy() {}
  },
}));

// Mock the store
jest.mock('@/store/monthlySummaryStore', () => ({
  useMonthlySummaryStore: () => ({
    monthlySummary: [],
    fetchMonthlySummary: jest.fn(),
  }),
}));

// Mock RewardPoints component
jest.mock('../components/dashboard/RewardPoints', () => ({
  __esModule: true,
  default: () => null,
}));

describe('MonthlySummary', () => {
  it('renders the monthly summary title and description', () => {
    render(<MonthlyPointsChart />);
    expect(screen.getByText('Monthly Points Summary')).toBeInTheDocument();
    expect(screen.getByText('Monthly Points summary for the year 2025')).toBeInTheDocument();
  });
}); 