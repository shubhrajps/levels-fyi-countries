// components/Skeleton/Skeleton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from '../index';
import '@testing-library/jest-dom';

describe('Skeleton Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skeleton />);
    expect(container).toBeInTheDocument();
  });

  it('contains the correct number of skeleton elements', () => {
    const { getAllByTestId } = render(<Skeleton />);
    const skeletonElements = getAllByTestId('skeleton-div');
    expect(skeletonElements.length).toBe(1);
  });

  it('has the correct classes applied', () => {
    const { getByTestId } = render(<Skeleton />);
    const skeletonDiv = getByTestId('skeleton-div');
    expect(skeletonDiv).toHaveClass('bg-gray-200');
  });

  it('contains the skeleton div', () => {
    render(<Skeleton />);
    const skeletonDiv = screen.getByTestId('skeleton-div');
    expect(skeletonDiv).toBeInTheDocument();
  });
});