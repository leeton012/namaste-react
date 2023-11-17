import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us Page test cases', () => {
  it('Should load contact us component', () => {
    render(<Contact />);

    const heading = screen.getByRole('heading');

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it('Should load Button in the Contact component', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it('Should load text sumbit in the Contact component', () => {
    render(<Contact />);

    const buttonText = screen.getByText('Submit');

    //Assertion
    expect(buttonText).toBeInTheDocument();
  });

  it('Should load placeholder on text field in the Contact component', () => {
    render(<Contact />);

    const text = screen.getByPlaceholderText('name');

    //Assertion
    expect(text).toBeInTheDocument();
  });

  // it('should load 2 input boxes in the contact component', () => {
  //   // Quering
  //   const inputBoxes = screen.getAllByRole('textbox');

  //   //Asserting
  //   expect(inputBoxes.length).toBe(2);
  // });
});
