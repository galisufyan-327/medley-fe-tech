/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Payout from '../pages/payout/Payout';
import PayoutService from '../services/modules/payout';

jest.mock('lodash.debounce', () => jest.fn((fn) => {
  const debouncedFn: any = jest.fn(fn);
  debouncedFn.cancel = jest.fn();
  return debouncedFn;
}));

jest.mock('../services/modules/payout');

describe('Payout Component', () => {
  beforeEach(() => {
    const mockData = [
      { dateAndTime: '2023-01-01T12:00:00Z', status: 'Completed', value: '$100' },
    ];

    jest.spyOn(PayoutService, 'getPayouts').mockResolvedValue({
      data: { data: mockData, metadata: { limit: 10, totalCount: 20, page: 1, totalPage: 2 } },
    } as any);

  })

  it('renders the component with no records found', async () => {
    jest.spyOn(PayoutService, 'getPayouts').mockResolvedValue({
      data: { data: [], metadata: { limit: 10, totalCount: 0, page: 1 } },
    } as any);

    await act(async () => {
      render(<Payout />);
    })

    expect(screen.getByTestId('main-heading')).toBeInTheDocument();
    expect(screen.getByText('Payouts')).toBeInTheDocument();
    expect(screen.getByText('No records found.')).toBeDefined();

  });

  it('renders the component with fetched data', async () => {

    await act(async () => {
      render(<Payout />);
    });

    await screen.findByTestId('sub-heading');
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('handles search and displays filtered data', async () => {
    const mockData = [
      { dateAndTime: '2023-01-01T12:00:00Z', status: 'Pending', value: '$100' },
    ];

    jest.spyOn(PayoutService, 'searchPayouts').mockResolvedValue({
      data: mockData,
    } as any);

    await act(async () => {
      render(<Payout />);
    });

    await screen.findByText('Payout History');

    await screen.findByText('Completed');

    const searchInput = screen.getByTestId('search-input');
    await act(async () => {
      userEvent.type(searchInput, 'Pending');
    });


    await screen.findByText('Pending');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });  
});
