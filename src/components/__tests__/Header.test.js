import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

describe('Header Component Test casses', () => {
  //   beforeAll(() => {
  //     console.log('Before All');
  //   });

  //   beforeEach(() => {
  //     console.log('Before Each');
  //   });

  //   afterEach(() => {
  //     console.log('After Each');
  //   });

  //   afterAll(() => {
  //     console.log('After All');
  //   });
  it('Should render Header component with login Button', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Quering
    //One way to find Login Button
    const loginButton = screen.getByRole('button', { name: 'Login' });

    //Other Way to find Login Button
    // not the good way to find
    //   const loginButton = screen.getByText('Login');

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it('Should render Header component with a cart item', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Quering
    // find the Cart in header component
    const cartItems = screen.getByText('Cart(0)');

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it('Should render Header with a Cart Item', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
  });

  it('Should change login button to logout ion change', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //Quering
    //One way to find Login Button
    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', { name: 'Logout' });

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
