import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/mockRestaurantItems.json';
// import MOCK_RES_DATA from '../mocks/mockRestaurantList.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../Cart';
import '@testing-library/jest-dom';
// import MOCK_RES_DATA from '../mocks/mockRestaurantList.json';
import Body from '../Body';

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_RES_DATA);
//     },
//   });
// });

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
        {/* <Body /> */}
        <Provider store={appStore}>
          <Header />
          <Cart />
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

  expect(screen.getAllByTestId('foodItems').length).toBe(7);

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));

  expect(screen.getByText('Your Cart is empty. Please do more shopping....')).toBeInTheDocument();

  expect(screen.getByRole('button', { name: 'Continue Shopping' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Continue Shopping' }));

  //   expect(screen.getAllByTestId('resCard').length).toBe(20);
});
