import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import App from "./tsx/App";
import { store } from "./redux/store";

const container = document.getElementById("root")!;
const root = createRoot(container);
const theme = createTheme({
  typography: { fontFamily: "DM Sans" },
  spacing: 3,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
