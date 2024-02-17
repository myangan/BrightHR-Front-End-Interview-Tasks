import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SecondTask, { absenceType, sortByFn } from "./SecondTask";

describe("Second task components", () => {
  test("renders Table Header components name correctly", () => {
    render(
      <BrowserRouter>
        <SecondTask />
      </BrowserRouter>
    );

    expect(screen.getByText("Employee name")).toBeInTheDocument();
    expect(screen.getByText("Absence type")).toBeInTheDocument();
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Start date")).toBeInTheDocument();
    expect(screen.getByText("End date")).toBeInTheDocument();
  });
});
describe("sortByFn function", () => {
  test("sortByFn function should return list", () => {
    const list: absenceType[] = [];
    const result = sortByFn(list, "asc", "");

    expect(typeof result).toBe("object");
    expect(result.length).toBe(0);
  });
  test("sortByFn should be able to sort by full name", () => {
    const list: absenceType[] = [
      {
        absenceType: "",
        approved: false,
        days: 10,
        employee: {
          firstName: "b",
          id: "",
          lastName: "c",
        },
        id: 1,
        startDate: "",
        conflicts: true,
      },
      {
        absenceType: "",
        approved: false,
        days: 10,
        employee: {
          firstName: "a",
          id: "",
          lastName: "b",
        },
        id: 2,
        startDate: "",
        conflicts: true,
      },
    ];
    const exp = list[1].id;
    const result = sortByFn(list, "asc", "Employee name");

    expect(exp).toBe(result[0].id);
  });
  test("sortByFn should be able to sort by absence type and asc and decs order", () => {
    const list: absenceType[] = [
      {
        absenceType: "b",
        approved: false,
        days: 10,
        employee: {
          firstName: "b",
          id: "",
          lastName: "c",
        },
        id: 1,
        startDate: "",
        conflicts: true,
      },
      {
        absenceType: "a",
        approved: false,
        days: 10,
        employee: {
          firstName: "a",
          id: "",
          lastName: "b",
        },
        id: 2,
        startDate: "",
        conflicts: true,
      },
    ];
    const exp = list[1].id;
    const exp2 = list[0].id;
    const result = sortByFn(list, "asc", "Absence type");

    expect(exp).toBe(result[0].id);

    const desRes = sortByFn(list, "desc", "Absence type");

    expect(exp2).toBe(desRes[0].id);
  });
  test("sortByFn should be able to sort by date and asc and decs order", () => {
    const list: absenceType[] = [
      {
        absenceType: "",
        approved: false,
        days: 10,
        employee: {
          firstName: "b",
          id: "",
          lastName: "c",
        },
        id: 1,
        startDate: "5/28/2022",
        conflicts: true,
      },
      {
        absenceType: "a",
        approved: false,
        days: 10,
        employee: {
          firstName: "a",
          id: "",
          lastName: "b",
        },
        id: 2,
        startDate: "5/20/2022",
        conflicts: true,
      },
    ];
    const exp = list[1].id;

    const result = sortByFn(list, "asc", "Start date");

    expect(exp).toBe(result[0].id);
  });
});
