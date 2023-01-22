import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme/themeSlice";
import homeReducer from "./slices/home/homeSlice";
import detailsReducer from "./slices/details/detailsSlice";
import accountReducer from "./slices/account/accountSlice";
import favoritesReducer from "./slices/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    home: homeReducer,
    details: detailsReducer,
    account: accountReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
