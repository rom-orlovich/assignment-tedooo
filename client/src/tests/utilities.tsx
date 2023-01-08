import { ThemeProvider } from "@mui/material";
import { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { AppStore, createAppStore, RootState } from "../redux/store";
import { theme } from "../tsx/MUI/mui.utilities";
import { appRouter } from "../tsx/routes/appRouter";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderUI = (
  UI: JSX.Element,
  initialRoutes = ["/"],
  { store = createAppStore(), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const testRouter = createMemoryRouter([appRouter], {
    initialEntries: initialRoutes,
  });

  const wrapper = () => {
    const checkInitialRoutesIsExist =
      initialRoutes.length === 1 && initialRoutes[0] === "";

    const checkLoadAppWithRouteOrOnlyUI = checkInitialRoutesIsExist ? (
      UI
    ) : (
      <RouterProvider router={testRouter} />
    );
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>{checkLoadAppWithRouteOrOnlyUI}</Provider>
        </ThemeProvider>
      </React.StrictMode>
    );
  };

  return {
    store,
    ...render(UI, { wrapper, ...renderOptions }),
  };
};
