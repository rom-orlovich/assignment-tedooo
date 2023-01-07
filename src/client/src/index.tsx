import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./tsx/App";
import { store } from "./redux/store";
import { APP_ROUTES } from "./tsx/components/NavBar/NavBar";

const container = document.getElementById("root")!;
const root = createRoot(container);
export const theme = createTheme({
  typography: { fontFamily: "DM Sans" },
  spacing: 8,
});

export const appRouter = {
  path: "/",
  element: <App />,
  children: [
    { path: APP_ROUTES.MESSAGES_ROUTE, element: <App /> },
    { path: APP_ROUTES.NOTIFICATION_ROUTE, element: <App /> },
  ],
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={createBrowserRouter([appRouter])} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
