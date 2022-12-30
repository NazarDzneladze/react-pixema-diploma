import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import homePageReducer from "./homePage/homePageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    homePage: homePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
