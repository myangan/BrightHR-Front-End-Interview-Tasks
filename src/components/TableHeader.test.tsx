import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TableHeader from "./TableHeader";

describe("Table Header components", () => {
  test("renders Table Header components name correctly", () => {
    render(
      <BrowserRouter>
        <TableHeader
          orderBy={""}
          order={"asc"}
          setOrderBy={(): void => {}}
          setOrder={(): void => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Employee name")).toBeInTheDocument();
    expect(screen.getByText("Absence type")).toBeInTheDocument();
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Start date")).toBeInTheDocument();
    expect(screen.getByText("End date")).toBeInTheDocument();
  });
});
