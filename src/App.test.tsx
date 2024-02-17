import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { homePageMsg } from "./data";

describe("App component", () => {
  test("render App components", () => {
    render(<App />);
    expect(screen.getByText(homePageMsg.title)).toBeInTheDocument();
  });
});
