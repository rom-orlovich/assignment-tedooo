import { IconButton, ListItem, ListItemIcon, Stack } from "@mui/material";

import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { APP_ROUTES } from "../../../routes/appRoutes";

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
  return (
    <Stack component={"ul"} className="navbar-right" direction="row">
      {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton> */}

      {navbarLinks.map(({ to, text, icon }) => (
        <ListItem key={to}>
          {icon && (
            <ListItemIcon sx={{ minWidth: "2rem" }}>{icon}</ListItemIcon>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={to}
          >
            {text}
          </NavLink>
        </ListItem>
      ))}
    </Stack>
  );
}

export default NavBarLinks;
