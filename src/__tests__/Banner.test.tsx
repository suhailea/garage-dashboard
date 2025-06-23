import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Banner } from '../components/dashboard/Banner';

describe('Banner', () => {
  it('renders the banner with title and service text', () => {
    render(<Banner />);
    expect(screen.getByText('PREMIUM GARAGE SERVICES')).toBeInTheDocument();
    expect(screen.getByText('Find the Best Garage Services for Your Vehicle')).toBeInTheDocument();
    expect(screen.getByText('Book Service')).toBeInTheDocument();
  });
}); 