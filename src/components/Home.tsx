import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import { homePageMsg } from "../data";

const Home: React.FC = () => {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "50%",
          mx: "25%",
        }}
      >
        <Typography variant="h5" sx={{ my: 5 }}>
          {homePageMsg.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          {homePageMsg.text}
        </Typography>
        <Typography variant="body1">{homePageMsg.end}</Typography>
      </Box>
    </Box>
  );
};

export default Home;
