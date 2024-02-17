import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { type } from "os";

const SecondTask: React.FC = () => {
  type employee = {
    firstName: string;
    id: string;
    lastName: string;
  };

  type data = {
    absenceType: string;
    approved: boolean;
    days: number;
    employee: employee;
    id: number;
    startDate: string;
  };
  const [stories, setStory] = useState<data[]>();
  useEffect(() => {
    fetch("https://front-end-kata.brighthr.workers.dev/api/absences")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setStory(data), 1500);
        console.log("Success ", data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  console.log(stories);
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Employee name</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Absence type
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Approved
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Start date
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  End date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stories &&
                stories.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
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
