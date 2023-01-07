import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./redux/store";
import { appRouter } from "./tsx/routes/appRouter";

export const theme = createTheme({
  typography: { fontFamily: "DM Sans" },
  spacing: 8,
});

const container = document.getElementById("root")!;

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={createBrowserRouter([appRouter])} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
