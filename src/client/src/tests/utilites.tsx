import { PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { AppStore, createAppStore, RootState } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderUI = (
  UI: JSX.Element,
  initialEntries = ["/"],
  { store = createAppStore(), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  // const testRoutes = createMemoryRouter([], {
  //   initialEntries,
  // });

  const wrapper = () => (
    <React.StrictMode>
      <Provider store={store}>{UI}</Provider>
    </React.StrictMode>
  );

  return {
    store,
    ...render(UI, { wrapper, ...renderOptions }),
  };
};
