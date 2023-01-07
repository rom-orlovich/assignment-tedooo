import { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { AppStore, createAppStore, RootState } from "../redux/store";
import { appRouter } from "../tsx/routes/appRouter";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderUI = (
  UI: JSX.Element,
  initialEntries = ["/"],
  { store = createAppStore(), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const testRouter = createMemoryRouter([appRouter], {
    initialEntries,
  });

  const wrapper = () => (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={testRouter} />
      </Provider>
    </React.StrictMode>
  );

  return {
    store,
    ...render(UI, { wrapper, ...renderOptions }),
  };
};
