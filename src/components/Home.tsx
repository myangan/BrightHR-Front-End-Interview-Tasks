import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "./NavBar";
import FileStructure from "./FileStructure";
import { FileNode, fileStructure } from "../data";
import DisplayItem from "./DisplayItem";

const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FileNode>();
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex" }}>hey</Box>
    </Box>
  );
};

export default Home;
