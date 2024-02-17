import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TableHeader from "./TableHeader";

type employee = {
  firstName: string;
  id: string;
  lastName: string;
};

export type absenceType = {
  absenceType: string;
  approved: boolean;
  days: number;
  employee: employee;
  id: number;
  startDate: string;
  conflicts?: boolean;
};

const SecondTask: React.FC = () => {
  const [absenceList, setAbsenceList] = useState<absenceType[]>();

  useEffect(() => {
    fetch("https://front-end-kata.brighthr.workers.dev/api/absences")
      .then((res) => res.json())
      .then((data: absenceType[]) => {
        setTimeout(() => setAbsenceList(data), 1500);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  useEffect(() => {
    if (absenceList) {
      absenceList.forEach((item) => {
        fetch(
          `https://front-end-kata.brighthr.workers.dev/api/conflict/${item.id}`
        )
          .then((res) => res.json())
          .then((data) => {
            setTimeout(() => (item.conflicts = data.conflicts), 1500);
          })
          .catch((error) => {
            console.log("Error", error);
          });
      });
    }
  }, [absenceList]);

  const [filterName, setFilterName] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState("");
  const handleClick = (e: any) => {
    setFilterName(e.target.textContent);
  };

  const visibleRows = React.useMemo(
    () => absenceList && sortByFn(absenceList, order, orderBy),
    [absenceList, order, orderBy]
  );
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader
              orderBy={orderBy}
              order={order}
              setOrderBy={setOrderBy}
              setOrder={setOrder}
            />
            <TableBody>
              {visibleRows &&
                visibleRows
                  .filter((item) => {
                    if (filterName === "") {
                      return true;
                    } else {
                      return (
                        `${item.employee.firstName} ${item.employee.lastName}` ===
                        filterName
                      );
                    }
                  })
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: row.conflicts ? "red" : "black" }}
                        onClick={handleClick}
                      >
                        {`${row.employee.firstName} ${row.employee.lastName}`}
                      </TableCell>
                      <TableCell align="right">{row.absenceType}</TableCell>
                      <TableCell align="right">
                        {row.approved ? "approved" : "pending approval"}
                      </TableCell>
                      <TableCell align="right">
                        {dateFormatter(row.startDate)}
                      </TableCell>
                      <TableCell align="right">
                        {getEndDate(row.startDate, row.days)}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        {filterName !== "" && (
          <Button onClick={() => setFilterName("")}>Back</Button>
        )}
      </Box>
    </Box>
  );
};

export default SecondTask;

const dateFormatter = (arg: string): string => {
  const d = new Date(arg);
  if (d.getFullYear() < 1900) return "TBD";
  return d.toLocaleDateString();
};

const getEndDate = (startDateStr: string, durationDays: number): string => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(
    startDate.setDate(startDate.getDate() + durationDays)
  );
  const endDateStr = dateFormatter(endDate.toDateString());

  return endDateStr;
};

export const sortByFn = (
  records: absenceType[],
  order: "asc" | "desc" = "asc",
  orderBy: string
): absenceType[] => {
  return records.sort((a, b) => {
    let keyA: string;
    let keyB: string;
    // default sort by full name
    switch (orderBy) {
      case "Start date":
        keyA = a.startDate;
        keyB = b.startDate;
        break;
      case "Absence type":
        keyA = a.absenceType;
        keyB = b.absenceType;
        break;
      default:
        keyA = `${a.employee.firstName} ${a.employee.lastName}`;
        keyB = `${b.employee.firstName} ${b.employee.lastName}`;
        break;
    }

    if (order === "asc") {
      return keyA.localeCompare(keyB);
    } else {
      return keyB.localeCompare(keyA);
    }
  });
};
