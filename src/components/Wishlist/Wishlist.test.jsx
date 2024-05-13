/*
Testing Strategy:
- Boundary Value Testing:
  - Empty Wishlist Message Rendering:
    - Test rendering the empty wishlist message correctly when no items are in the wishlist.
  - Component Reusability:
    - Test the reusability of the Wishlist component by rendering it multiple times.
*/
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; 
import configureStore from "redux-mock-store";
import Wishlist from "./Wishlist"; 
const mockStore = configureStore([]); 
describe("Wishlist Component", () => {
  test("renders empty wishlist message when no items are in the wishlist", () => {
    const initialState = { wishlist: { wishlist: [] } };
    const store = mockStore(initialState);
    
    render(
      <Provider store={store}>
        <Wishlist setOpenWishlist={() => {}} />
      </Provider>
    );

    const emptyMessage = screen.getByText("Wishlist Items is empty!");
    expect(emptyMessage).toBeInTheDocument();
  });

  test("renders empty wishlist message when no items are in the wishlist", () => {
    const initialState = { wishlist: { wishlist: [] } };
    const store = mockStore(initialState);
    
    render(
      <Provider store={store}>
        <Wishlist setOpenWishlist={() => {}} />
      </Provider>
    );

    const emptyMessage = screen.getByText("Wishlist Items is empty!");
    expect(emptyMessage).toBeInTheDocument();
  });

});
