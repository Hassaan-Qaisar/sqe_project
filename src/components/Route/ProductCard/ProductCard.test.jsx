import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import ProductCard from "./ProductCard";

const mockStore = configureStore([]);

describe("ProductCard Component", () => {
  test("renders product name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const productName = screen.getByText("Test Product");
    expect(productName).toBeInTheDocument();
  });

  test("renders shop name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const shopName = screen.getByText("Test Shop");
    expect(shopName).toBeInTheDocument();
  });

  test("renders shop name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const shopName = screen.getByText("Test Shop");
    expect(shopName).toBeInTheDocument();
  });

  test("renders product name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const productName = screen.getByText("Test Product");
    expect(productName).toBeInTheDocument();
  });

  test("renders shop name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const shopName = screen.getByText("Test Shop");
    expect(shopName).toBeInTheDocument();
  });

  test("renders shop name correctly", () => {
    const data = {
      _id: "1",
      name: "Test Product",
      images: [{ url: "test.jpg" }],
      shop: { _id: "1", name: "Test Shop" },
      originalPrice: 10,
      discountPrice: 8,
      sold_out: 5,
      ratings: 4,
    };

    const initialState = { wishlist: { wishlist: [] }, cart: { cart: [] } };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router> {/* Wrap ProductCard with Router */}
          <ProductCard data={data} />
        </Router>
      </Provider>
    );

    const shopName = screen.getByText("Test Shop");
    expect(shopName).toBeInTheDocument();
  });

  // Add more test cases for other elements and interactions similarly
});
