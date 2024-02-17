import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FileStructure from "./FileStructure";
import { FileNode, fileStructure } from "../data";
import DisplayItem from "./DisplayItem";
import NavBar from "./NavBar";

const FirstTask: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FileNode>();
  const [search, setSearch] = useState("");
  const [list, setList] = useState(fileStructure);

  const handleClick = (searchString: string) => {
    const filteredItems: FileNode[] = [];

    fileStructure.forEach((item) => {
      if (item.type !== "folder") {
        if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
          filteredItems.push(item);
        }
      } else {
        const matchedFiles = item.files?.filter((file) =>
          file.name.toLowerCase().includes(searchString.toLowerCase())
        );

        if (matchedFiles && matchedFiles.length > 0) {
          // Clone the folder object to avoid mutating the original data
          const matchedFolder: FileNode = { ...item, files: matchedFiles };
          filteredItems.push(matchedFolder);
        }
      }
    });
    setList(filteredItems);
  };
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
          <Typography variant="h5" sx={{ m: 1 }}>
            Your Files
          </Typography>
          <TextField
            fullWidth
            label="Search by file name"
            id="fullWidth"
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(event.target.value);
            }}
          />
          <Button onClick={() => handleClick(search)}>Apply filter</Button>
          <FileStructure structure={list} setSelectedItem={setSelectedItem} />
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
