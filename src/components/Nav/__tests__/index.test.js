import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [{ name: "portraits", description: "Portraits of people in my life" }];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />
    );
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    // Arrange
    render(
      <Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />
    );

    // Assert
    expect(screen.getByLabelText("camera")).toHaveTextContent("📸");
  });
});

describe("links are visible", () => {
  it("inserts text into the links", () => {
    // Arrange
    render(
      <Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />
    );
    // Assert
    expect(screen.getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(screen.getByTestId("about")).toHaveTextContent("About me");
  });
});
