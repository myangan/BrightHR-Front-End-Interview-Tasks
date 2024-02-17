import React from "react";
import FileNode from "./FileNode";
import List from "@mui/material/List";
import { FileNode as IFileNode } from "../data";

interface FileStructureProps {
  structure: IFileNode[];
  setSelectedItem: (item: IFileNode) => void;
}

const FileStructure: React.FC<FileStructureProps> = ({
  structure,
  setSelectedItem,
}) => {
  return (
    <List>
      {structure.map((node, index) => (
        <FileNode key={index} node={node} onSelect={setSelectedItem} />
      ))}
    </List>
  );
};

export default FileStructure;
