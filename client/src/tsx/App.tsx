import { Container, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container
        sx={{
          backgroundColor: grey[50],
        }}
        maxWidth="xl"
      >
        <CssBaseline />
        <Feed />
      </Container>
    </>
  );
}

export default App;
