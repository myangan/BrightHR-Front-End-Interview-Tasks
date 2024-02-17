import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        disableGutters
        variant="dense"
        sx={{
          display: "flex",
          height: "60px",
          flexGrow: 1,
          justifyContent: "space-between",
          mx: "60px",
        }}
      >
        <Box
          component={Link}
          to={"/"}
          sx={{
            color: "white",
            textDecoration: "none",
            borderRadius: "0px",
            fontWeight: 500,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Home
        </Box>
        <Box
          component={Link}
          to={"/firstTask"}
          sx={{
            color: "white",
            textDecoration: "none",
            borderRadius: "0px",
            fontWeight: 500,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          First Task
        </Box>
        <Box
          component={Link}
          to={"/secondTask"}
          sx={{
            color: "white",
            textDecoration: "none",
            borderRadius: "0px",
            fontWeight: 500,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          Second Task
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
