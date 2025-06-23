import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Benefits } from '../components/dashboard/Benefits';

jest.mock('@/store/benefitStore', () => ({
  useBenefitStore: () => ({
    benefits: [{ id: 1, title: 'Test Benefit', discount: '10% OFF', icon: 'Utensils' }],
    fetchBenefits: jest.fn(),
  }),
}));

describe('Benefits', () => {
  it('renders benefits with discount information', () => {
    render(<Benefits />);
    expect(screen.getByText('Test Benefit')).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('10% OFF'))).toBeInTheDocument();
  });
}); 