import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Cardetails } from '../components/dashboard/car/Cardetails';

describe('Cardetails', () => {
  it('renders the car details sections', () => {
    render(<Cardetails />);
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Maintenance History')).toBeInTheDocument();
    expect(screen.getByText('VIN:')).toBeInTheDocument();
  });
}); 