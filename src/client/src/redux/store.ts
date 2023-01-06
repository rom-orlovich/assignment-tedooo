import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
  PreloadedState,
} from "@reduxjs/toolkit";

const configureStoreOptions = {
  reducer: {},
} as const;

export const store = configureStore(configureStoreOptions);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const setupStore = (
  preloadedState?: PreloadedState<RootState>
): EnhancedStore<RootState> =>
  configureStore({ ...configureStoreOptions, preloadedState });
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
