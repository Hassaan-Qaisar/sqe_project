import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // Import the Provider
import configureStore from "redux-mock-store"; // Import the configureStore function
import Wishlist from "./Wishlist"; // Correct the path to the Wishlist component file

const mockStore = configureStore([]); // Initialize a mock Redux store

describe("Wishlist Component", () => {
  test("renders empty wishlist message when no items are in the wishlist", () => {
    // Mock initial Redux state
    const initialState = { wishlist: { wishlist: [] } };
    const store = mockStore(initialState);
    
    render(
      <Provider store={store}> {/* Wrap the component with Provider */}
        <Wishlist setOpenWishlist={() => {}} />
      </Provider>
    );

    const emptyMessage = screen.getByText("Wishlist Items is empty!");
    expect(emptyMessage).toBeInTheDocument();
  });

  test("renders empty wishlist message when no items are in the wishlist", () => {
    // Mock initial Redux state
    const initialState = { wishlist: { wishlist: [] } };
    const store = mockStore(initialState);
    
    render(
      <Provider store={store}> {/* Wrap the component with Provider */}
        <Wishlist setOpenWishlist={() => {}} />
      </Provider>
    );

    const emptyMessage = screen.getByText("Wishlist Items is empty!");
    expect(emptyMessage).toBeInTheDocument();
  });

  // Add other test cases similarly
});
