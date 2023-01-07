import {
  AppBar,
  Toolbar,
  IconButton,
  Autocomplete,
  Stack,
  SxProps,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { ReactNode, useState } from "react";
import TedoooIcon from "./TedoooIcon";

export enum APP_ROUTES {
  MESSAGES_ROUTE = "messages",
  NOTIFICATION_ROUTE = "notifications",
}
function NavBar() {
  const AppBarSX: SxProps = {
    "&": {
      width: "100%",
      backgroundColor: "white",
      ".navbar-left": {
        ".tedooo-logo": {
          width: "2.5rem",
          height: "2.5rem",
          padding: "0.5rem",
          background:
            "linear-gradient(131.96deg, #96DCD0 -8.63%, #6CCEBD -5.56%, #2DB8A1 35.83%, #28A38F 89.48%, #208171 133.94%)",
          borderRadius: "4px",
        },
        ".search-input": {
          position: "relative",
          svg: {
            position: "absolute",
            top: "18%",
            left: "3%",
            color: "grey",
          },
          input: {
            width: "12rem",
            ".input-container": {},
            background: "#F4F5F5",
            borderRadius: "32px",
            padding: "0.5rem",
            paddingLeft: "2rem",
            border: "1px solid grey",
            ":focus": {
              outline: "1px solid grey",
              border: "1px solid grey",
            },
          },
        },
      },
      ".navbar-right": {
        li: {
          padding: "0.5rem",
        },
        ml: "auto",
        a: {
          padding: "0 0.5rem",
          textDecoration: "none",
        },
        "li:has(.active)": {
          background: "",
          "*": {
            color: "#2DB8A1",
          },
          borderBottom: "2px solid #2DB8A1",
        },
      },
    },
  };
  interface Link {
    to: string;
    icon?: ReactNode;
    text: string;
  }

  const navbarLinks: Link[] = [
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
  return (
    <AppBar sx={AppBarSX} position="fixed">
      <Toolbar component={Stack} variant="regular" direction={"row"}>
        <Stack direction={"row"} alignItems="center" className="navbar-left">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TedoooIcon />
          </IconButton>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={["s"]}
            className="search-input"
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <SearchIcon />
                <input
                  type="text"
                  {...params.inputProps}
                  placeholder={"Search"}
                />
              </div>
            )}
          />
        </Stack>

        <Stack component={"ul"} className="navbar-right" direction="row">
          {navbarLinks.map(({ to, text, icon }) => (
            <ListItem key={to}>
              {icon && (
                <ListItemIcon sx={{ minWidth: "2rem" }}>{icon}</ListItemIcon>
              )}
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "unactive")}
                to={to}
              >
                {text}
              </NavLink>
            </ListItem>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
