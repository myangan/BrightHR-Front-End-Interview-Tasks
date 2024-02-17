import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FileNode from "./FileNode";

describe("Home component", () => {
  test("renders home page messages correctly", () => {
    const node = {
      type: "pdf",
      name: "test",
      added: undefined,
      files: undefined,
    };
    render(
      <BrowserRouter>
        <FileNode node={node} level={0} onSelect={() => {}} />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/test/i);

    expect(titleElement).toBeInTheDocument();

    const textBtn = screen.getByRole("button", { name: "test" });
    expect(textBtn).toBeInTheDocument();
  });
});
