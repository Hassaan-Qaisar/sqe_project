import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import BestDeals from "./BestDeals";

const mockStore = configureStore([]);

describe("BestDeals Component", () => {
  test("renders 'Best Deals' heading", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <BestDeals />
        </Router>
      </Provider>
    );

    const heading = screen.getByText("Best Deals");
    expect(heading).toBeInTheDocument();
  });


  test("displays message when there are no products", () => {
    const initialState = { products: { allProducts: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <BestDeals />
        </Router>
      </Provider>
    );

    const emptyMessage = screen.getByText("No products available");
    expect(emptyMessage).toBeInTheDocument();
  });
});
