import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/mockRestaurantItems.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('SHould add the product to the cart in Header', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('CHICKEN CHIZZA (5)');

  fireEvent.click(accordianHeader);

  const foodLength = screen.getAllByTestId('foodItems').length;
  expect(foodLength).toBe(5);

  expect(screen.getByText('Cart(0)')).toBeInTheDocument();

  const addBtns = screen.getAllByRole('button', { name: 'Add +' });

  fireEvent.click(addBtns[0]);

  expect(screen.getByText('Cart(1)')).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText('Cart(2)')).toBeInTheDocument();
});
