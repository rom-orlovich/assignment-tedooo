import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Autocomplete,
  TextField,
  Stack,
  SxProps,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { ReactElement } from "react";
import TedoooIcon from "./TedoooIcon";

function NavBar() {
  const AppBarSX: SxProps = {
    "&": {
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
        // ".MuiOutlinedInput-root": {
        //   padding: "1px",
        //   borderRadius: "32px",
        //   background: "#F4F5F5",
        //   border: "none",
        // },
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
      ".navbar-right": {},
    },
  };
  interface Link {
    to: string;
    icon?: () => JSX.Element;
    text: string;
  }
  const navbarLinks: Link[] = [
    { to: "/home", text: "Home" },
    { to: "/messages", text: "Messages" },
    { to: "/notifications", text: "Notifications" },
  ];
  return (
    <AppBar sx={AppBarSX} position="fixed">
      <Toolbar variant="regular">
        <Stack>
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

          <Stack className="navbar-right" direction="row">
            <List>
              {navbarLinks.map((link) => (
                <ListItem> </ListItem>
              ))}
            </List>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
