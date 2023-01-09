import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors/";

import { useEffect } from "react";
import Feed from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // Note: comment out this useEffect will cancel the memorization of the posts the user has watched.
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);
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
