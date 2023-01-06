import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postsAPI } from "./api/postsAPI";

const configureStoreOptions = {
  reducer: {},
} as const;

export const createAppStore = () =>
  configureStore({
    reducer: {
      postsAPI: postsAPI.reducer,
    },
    middleware(getDefaultMiddleware) {
      return [...getDefaultMiddleware(), postsAPI.middleware] as any;
    },
  });
export const store = configureStore({
  reducer: {
    postsAPI: postsAPI.reducer,
  },
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), postsAPI.middleware] as any;
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof createAppStore>;

setupListeners(store.dispatch);
// export const setupStore = (
//   preloadedState?: PreloadedState<RootState>
// ): EnhancedStore<RootState> =>
//   configureStore({ ...configureStoreOptions, preloadedState });

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
