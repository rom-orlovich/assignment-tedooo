import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { postsAPI } from "./api/postsAPI";
import { feedFiltersSlice, getFeedFilters } from "./slices/feedFiltersSlice";

const reducers = combineReducers({
  feedFiltersSlice: feedFiltersSlice.reducer,
  postsAPI: postsAPI.reducer,
});
const configureStoreOptions = {
  reducer: reducers,
  middleware(
    getDefaultMiddleware: CurriedGetDefaultMiddleware<
      ReturnType<typeof reducers>
    >
  ) {
    return [...getDefaultMiddleware(), postsAPI.middleware];
  },
};

export const createAppStore = () => configureStore(configureStoreOptions);

export const store = createAppStore();
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof createAppStore>;

setupListeners(store.dispatch);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
