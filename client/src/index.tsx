import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./redux/store";
import { appRouter } from "./tsx/routes/appRouter";
import { theme } from "./tsx/MUI/mui.utilities";

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
