import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <Container sx={{ backgroundColor: grey[50] }} maxWidth="lg">
      <Feed />
    </Container>
  );
}

export default App;
