import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';

import { Navigation } from './Navigation';

describe('Navigation', () => {
  it('should redirect to Posts page', () => {
    mockRouter.setCurrentUrl('/');

    render(<Navigation />);

    const postsNavItem = screen.getByTestId('postsNavItem');

    act(() => {
      fireEvent.click(postsNavItem);
      mockRouter.push('/route-change');
    });

    const postsPage = screen.queryByTestId('postsPage');

    expect(postsPage).not.toBeInTheDocument;
  });

  it('should redirect to Home page', () => {
    mockRouter.setCurrentUrl('/some-route');

    render(<Navigation />);

    const homeNavItem = screen.getByTestId('homeNavItem');

    act(() => {
      fireEvent.click(homeNavItem);
      mockRouter.push('/');
    });

    const homePage = screen.queryByTestId('homePage');

    expect(homePage).not.toBeInTheDocument;
  });
});
