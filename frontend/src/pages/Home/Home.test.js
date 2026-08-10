import { render, screen, waitFor } from '@testing-library/react';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import Home from '.';

describe('Test Home', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // FIRST TEST (mocked)
  test('Test Render', async () => {
    const mockGet = jest.spyOn(axios, 'get');

    mockGet.mockImplementation((url) => {
      switch (url) {
        case `${API_URL}/api/category/?format=json`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: [
                {
                  id: 1,
                  name: 'Handhelds',
                  description: "So big, you don't need thumbs.",
                },
                {
                  id: 2,
                  name: 'Appeteasers',
                  description: 'Tease the hangry hippo, he get hangrier',
                },
              ],
            },
          });
        default:
          return Promise.resolve({
            data: {
              status: 'fail',
            },
          });
      }
    });

    render(<Home />);

    expect(await screen.findAllByTestId(/category-item/i)).toHaveLength(2);
    expect(await screen.findByText('Appeteasers')).toBeInTheDocument();
  });

  // SECOND TEST (integration)
  test(
    'Test Render (integration)',
    async () => {
      // mock removed

      render(<Home />);

      // Hits the live API, so allow more than the 1s default for the round-trip.
      expect(
        await screen.findAllByTestId(/category-item/i, {}, { timeout: 5000 })
      ).toHaveLength(2);
      expect(
        await screen.findByText('Appeteasers', {}, { timeout: 5000 })
      ).toBeInTheDocument();
    },
    15000
  );
});
