import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme/themeSlice";
import homePageReducer from "./slices/home/homeSlice";
import detailsPageReducer from "./slices/details/detailsSlice";
import accountReducer from "./slices/account/accountSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    homePage: homePageReducer,
    detailsPage: detailsPageReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
