import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/mockRestaurantList.json';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should search restaurant list for Burger text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(20);

  //Quering
  const searchBtn = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'burger' } });

  fireEvent.click(searchBtn);

  //screen should load with 2 data
  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(2);
});

it('should search top rated restaurant', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole('button', { name: 'Top Rated Restaurants' });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId('resCard');

  expect(cardsAfterFilter.length).toBe(4);
});
