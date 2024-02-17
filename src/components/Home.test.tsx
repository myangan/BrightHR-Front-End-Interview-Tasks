import React from "react";
import { render, screen } from "@testing-library/react";
import { homePageMsg } from "../data";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  test("renders home page messages correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(homePageMsg.title);
    const textElement = screen.getByText(homePageMsg.text);
    const endElement = screen.getByText(homePageMsg.end);

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(endElement).toBeInTheDocument();
  });
});
