import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import Order from '.';
import OrderContext from '../../context/OrderContext';

describe('Test Order', () => {
  let orderName;
  let orderItems;
  beforeEach(() => {
    //Arrange:
    //Setup Order Context
    orderName = 'test-fun';
    orderItems = [
      { item: 'Test 1', quantity: 1 },
      { item: 'Test 2', quantity: 2 },
      { item: 'Test 3', quantity: 3 },
    ];
    //Mock API calls
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((url) => {
      switch (url) {
        case `${API_URL}/api/delivery/test-fun/0`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 2.5,
            },
          });
        case `${API_URL}/api/delivery/test-fun/5`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 5.0,
            },
          });
        case `${API_URL}/api/subtotal/test-fun`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: 5,
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
  });

  it('Test Delivery Fee', async () => {
    //Add a Test to verify that delivery fee shows up here
    //Act: TODO
    //Assert: TODO
  });

  it('Test Update Delivery Fee', async () => {
    //Modify the delivery distance and verify that the delivery fee is updated
    //Act: TODO
    //Assert: TODO
  });
});
