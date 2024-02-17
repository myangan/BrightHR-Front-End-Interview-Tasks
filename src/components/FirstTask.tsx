import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FileStructure from "./FileStructure";
import { FileNode, fileStructure } from "../data";
import DisplayItem from "./DisplayItem";
import NavBar from "./NavBar";

const FirstTask: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FileNode>();

  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "250px",
            height: "100vh",
            overflowY: "auto",
            borderRight: "1px solid #ddd",
          }}
        >
          <Typography variant="h5">Your Files</Typography>
          <FileStructure
            structure={fileStructure}
            setSelectedItem={setSelectedItem}
          />
        </Box>
        {selectedItem && (
          <Box
            sx={{
              height: "100vh",
            }}
          >
            <DisplayItem item={selectedItem} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FirstTask;
