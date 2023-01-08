import { IconButton, Stack } from "@mui/material";
import React from "react";

import TedoooIcon from "../NavBarRight/TedoooIcon";
import SearchInput from "./SearchInput/SearchInput";

function NavBarLeft() {
  return (
    <Stack direction={"row"} alignItems="center" className="navbar-left">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <TedoooIcon />
      </IconButton>
      <SearchInput />
    </Stack>
  );
}

export default NavBarLeft;
