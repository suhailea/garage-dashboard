import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CarViewer } from '../components/dashboard/car/CarViewer';

describe('CarViewer', () => {
  it('renders the Vehicle Details title and description', () => {
    render(<CarViewer />);
    expect(screen.getByText('Vehicle Details')).toBeInTheDocument();
    expect(
      screen.getByText(
        'View your car in 3D and see all its details, status, and upcoming service information.'
      )
    ).toBeInTheDocument();
  });
}); 