// FeaturedProduct.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import FeaturedProduct from "./FeaturedProduct";

const mockStore = configureStore([]);

describe("FeaturedProduct Component", () => {
  test("renders 'Featured Products' heading", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <FeaturedProduct />
        </Router>
      </Provider>
    );

    const heading = screen.getByText("Featured Products");
    expect(heading).toBeInTheDocument();
  });

  test("displays message when there are no products", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <FeaturedProduct />
        </Router>
      </Provider>
    );

    const emptyMessage = screen.getByText("No featured products available");
    expect(emptyMessage).toBeInTheDocument();
  });
  
  test("renders 'Featured Products' heading", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <FeaturedProduct />
        </Router>
      </Provider>
    );

    const heading = screen.getByText("Featured Products");
    expect(heading).toBeInTheDocument();
  });

  test("displays message when there are no products", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <FeaturedProduct />
        </Router>
      </Provider>
    );

    const emptyMessage = screen.getByText("No featured products available");
    expect(emptyMessage).toBeInTheDocument();
  });
  
});
