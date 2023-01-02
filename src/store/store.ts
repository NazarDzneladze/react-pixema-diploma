import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import homePageReducer from "./homePage/homePageSlice";
import detailsPageReducer from "./detailsPage/detailsPageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    homePage: homePageReducer,
    detailsPage: detailsPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
