import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { postsAPI } from "./api/postsAPI";

const configureStoreOptions = {
  reducer: {},
} as const;

export const createAppStore = <T extends EnhancedStore<any>>(
  preloadedState?: T
) =>
  configureStore({
    reducer: {},
    middleware(getDefaultMiddleware) {
      return [...getDefaultMiddleware(), postsAPI.middleware];
    },
    preloadedState,
  });
export const store = createAppStore();

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

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
