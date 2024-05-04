// Categories.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Categories from "./Categories";

describe("Categories Component", () => {
  test("renders branding section when brandingData is provided", () => {
    const brandingData = [
      { icon: <div>Icon 1</div>, title: "Title 1", Description: "Description 1" },
      { icon: <div>Icon 2</div>, title: "Title 2", Description: "Description 2" }
    ];

    render(
      <Router>
        <Categories brandingData={brandingData} />
      </Router>
    );

    const brandingSection = screen.getByTestId("branding-section");
    expect(brandingSection).toBeInTheDocument();

    // You can add more assertions to test the content of the branding section
  });

  test("renders categories section when categoriesData is provided", () => {
    const categoriesData = [
      { id: 1, title: "Category 1", image_Url: "image1.jpg" },
      { id: 2, title: "Category 2", image_Url: "image2.jpg" }
    ];

    render(
      <Router>
        <Categories categoriesData={categoriesData} />
      </Router>
    );

    const categoriesSection = screen.getByTestId("categories-section");
    expect(categoriesSection).toBeInTheDocument();

    // You can add more assertions to test the content of the categories section
  });
  test("renders branding section without brandingData", () => {
    render(
      <Router>
        <Categories />
      </Router>
    );

    const brandingSection = screen.getByTestId("branding-section");
    expect(brandingSection).toBeInTheDocument();
  });

  test("renders categories section without categoriesData", () => {
    render(
      <Router>
        <Categories />
      </Router>
    );

    const categoriesSection = screen.getByTestId("categories-section");
    expect(categoriesSection).toBeInTheDocument();
  });

  test("renders categories section with empty categoriesData", () => {
    const categoriesData = [];

    render(
      <Router>
        <Categories categoriesData={categoriesData} />
      </Router>
    );

    const categoriesSection = screen.getByTestId("categories-section");
    expect(categoriesSection).toBeInTheDocument();
  });

  
});
