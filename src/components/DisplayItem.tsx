import React from "react";
import { Box, Typography } from "@mui/material";
import { FileNode } from "../data";

const DisplayItem: React.FC<{ item: FileNode }> = ({ item }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">{item.name}</Typography>
      <Typography variant="body1">{item.type}</Typography>
      <Typography variant="body1">{item.added}</Typography>
    </Box>
  );
};

export default DisplayItem;
