import {
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  Stack,
  useMediaQuery,
} from "@mui/material";

import { ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { APP_ROUTES } from "../../../routes/appRoutes";
import { theme } from "../../../..";
import SideNavBar from "./SideNavBar";

export interface Link {
  to: string;
  icon?: ReactNode;
  text: string;
}

export const navbarLinks: Link[] = [
  { to: "/", text: "Home", icon: <HomeOutlinedIcon /> },
  {
    to: APP_ROUTES.MESSAGES_ROUTE,
    text: "Messages",
    icon: <ChatBubbleOutlineOutlinedIcon />,
  },
  {
    to: APP_ROUTES.NOTIFICATION_ROUTE,
    text: "Notifications",
    icon: <NotificationsNoneOutlinedIcon />,
  },
];

function NavBarLinks() {
  const match = useMediaQuery<typeof theme>((theme) =>
    theme.breakpoints.down("md")
  );
  const ListLinks = navbarLinks.map(({ to, text, icon }) => (
    <ListItem key={to}>
      {icon && <ListItemIcon sx={{ minWidth: "2rem" }}>{icon}</ListItemIcon>}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={to}
      >
        {text}
      </NavLink>
    </ListItem>
  ));

  return (
    <Stack component={"ul"} className="navbar-right" direction="row">
      {match ? <SideNavBar>{ListLinks}</SideNavBar> : ListLinks}
    </Stack>
  );
}

export default NavBarLinks;
