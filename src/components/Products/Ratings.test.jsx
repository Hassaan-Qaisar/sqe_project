import React from "react";
import { render, screen } from '@testing-library/react';
import Ratings from './Ratings'; // Correct the path to the Ratings component file

describe('Ratings Component', () => {
  test('renders correct number of stars for given rating', () => {
    render(<Ratings rating={3.5} />); 

  });
});
