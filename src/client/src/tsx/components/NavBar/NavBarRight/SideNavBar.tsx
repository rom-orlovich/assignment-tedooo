import React, { PropsWithChildren, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";
import { linksStyle } from "../NavBar";

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
        sx={{ "&": { ...linksStyle }, marginTop: "2rem" }}
        className="sideNavBar"
        anchor={"right"}
        open={isOpen}
        onClick={handleCloseSideBar}
        onClose={handleCloseSideBar}
      >
        {children}
      </Drawer>
    </>
  );
}

export default SideNavBar;
