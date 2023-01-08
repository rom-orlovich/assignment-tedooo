import { AppBar, Toolbar, Stack, SxProps } from "@mui/material";

import NavBarLinks from "./NavBarRight/NavBarLinks";

import NavBarLeft from "./NavBarLeft/NavBarLeft";
import { theme } from "../../..";

export const linksStyle = {
  li: {
    padding: "0.5rem",
  },
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
};

const AppBarSX: SxProps<typeof theme> = (theme) => {
  const inputBorders = "1px solid grey";
  return {
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
            border: inputBorders,
            ":focus": {
              outline: inputBorders,
              border: inputBorders,
            },
          },
        },
      },
      ".navbar-right": {
        ml: "auto",
        li: {
          padding: "0.5rem",
        },
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
};
function NavBar() {
  return (
    <AppBar sx={AppBarSX} position="fixed">
      <Toolbar component={Stack} variant="regular" direction={"row"}>
        <NavBarLeft />
        <NavBarLinks />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
