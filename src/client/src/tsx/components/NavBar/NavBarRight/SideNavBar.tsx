import React, { PropsWithChildren, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { flexDir } from "../../../MUI/mui.utilities";

const sideNavBarSX: SxProps = {
  "&": {
    li: { justifyContent: "space-between", padding: "0.5rem" },
    a: {
      padding: "0 0.5rem",
      textDecoration: "none",
    },
    "li:has(.active)": {
      borderBottom: "2px solid #2DB8A1",
      "*": {
        color: "#2DB8A1",
      },
    },
  },
  marginTop: "2rem",
  ".links-container": {
    width: "12rem",
    ...flexDir({ gap: "0.5rem", flexDir: "column" }),
  },
};

function SideNavBar({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCloseSideBar = () => {
    setIsOpen(false);
  };
  const handleOpenSideBar = () => {
    setIsOpen(true);
  };
  return (
    <>
      <IconButton
        edge="start"
        aria-label="open drawer"
        onClick={handleOpenSideBar}
        sx={{
          color: "#2DB8A1",
          mr: 2,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={sideNavBarSX}
        className="sideNavBar"
        anchor={"right"}
        open={isOpen}
        onClick={handleCloseSideBar}
        onClose={handleCloseSideBar}
      >
        <Box className="links-container">
          <IconButton onClick={handleCloseSideBar} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Drawer>
    </>
  );
}

export default SideNavBar;
