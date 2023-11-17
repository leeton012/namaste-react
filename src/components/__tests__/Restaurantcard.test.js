import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/restaurantCardMock.json';
import '@testing-library/jest-dom';

it('should render the restaurant card component with props data', () => {
  // render the component with mock props data
  render(<RestaurantCard resData={MOCK_DATA} />);

  //quering
  const resName = screen.getByText('Anand Sweets & Savouries');

  //Assertion
  expect(resName).toBeInTheDocument();
});

it('Should render restaurant card component with promoted lavel', () => {
  withPromotedLabel(MOCK_DATA);

  const resWithPromotedLabel = screen.findByTitle('promoted');

  expect(resWithPromotedLabel).toBeTruthy();
});
