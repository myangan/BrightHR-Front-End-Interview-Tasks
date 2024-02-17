import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Nav bar component", () => {
  test("renders Nav bar correctly with links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    const FirstTask = screen.getByRole("link", { name: "First Task" });
    const secondTask = screen.getByRole("link", { name: "Second Task" });

    expect(homeLink).toBeInTheDocument();
    expect(FirstTask).toBeInTheDocument();
    expect(secondTask).toBeInTheDocument();
  });
});
