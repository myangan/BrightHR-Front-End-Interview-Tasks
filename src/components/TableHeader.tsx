import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";

type tableHeaderProps = {
  orderBy: string;
  order: "asc" | "desc";
  setOrderBy: (arg: string) => void;
  setOrder: (arg: "asc" | "desc") => void;
};

const TableHeader: React.FC<tableHeaderProps> = ({
  orderBy,
  order,
  setOrderBy,
  setOrder,
}) => {
  const createSortHandler = (property: string) => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: "bold" }}>
          <TableSortLabel
            active={orderBy === "Employee name"}
            direction={orderBy === "Employee name" ? order : "asc"}
            onClick={() => createSortHandler("Employee name")}
          >
            Employee name
          </TableSortLabel>
        </TableCell>
        <TableCell align="right" sx={{ fontWeight: "bold" }}>
          <TableSortLabel
            active={orderBy === "Absence type"}
            direction={orderBy === "Absence type" ? order : "asc"}
            onClick={() => createSortHandler("Absence type")}
          >
            Absence type
          </TableSortLabel>
        </TableCell>
        <TableCell align="right" sx={{ fontWeight: "bold" }}>
          Approved
        </TableCell>
        <TableCell align="right" sx={{ fontWeight: "bold" }}>
          <TableSortLabel
            active={orderBy === "Start date"}
            direction={orderBy === "Start date" ? order : "asc"}
            onClick={() => createSortHandler("Start date")}
          >
            Start date
          </TableSortLabel>
        </TableCell>
        <TableCell align="right" sx={{ fontWeight: "bold" }}>
          End date
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
