import React, { PropsWithChildren, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { flexDir } from "../../../../MUI/mui.utilities";
import WelcomeUser from "./WelcomeUser";

const SideBarSX: SxProps = {
  "&": {
    alignItems: "flex-start",
    ".MuiPaper-root": {
      gap: "1rem",
    },

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

  ".links-container": {
    width: "15rem",
    ...flexDir({ gap: "0.5rem", flexDir: "column" }),
  },
};

function SideBar({ children }: PropsWithChildren) {
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
        sx={SideBarSX}
        className="SideBar"
        anchor={"right"}
        open={isOpen}
        onClick={handleCloseSideBar}
        onClose={handleCloseSideBar}
      >
        <IconButton
          onClick={handleCloseSideBar}
          sx={{ mb: 0, ml: 0.5, justifyContent: "initial" }}
        >
          <CloseIcon />
        </IconButton>
        <WelcomeUser />
        <Box className="links-container">{children}</Box>
      </Drawer>
    </>
  );
}

export default SideBar;
