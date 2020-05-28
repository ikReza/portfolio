import React from "react";
import { Box, AppBar, Toolbar } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <ArrowBack />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
