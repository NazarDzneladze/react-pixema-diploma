import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface IThemeSlice {
  currentTheme: Theme;
}

const initialState: IThemeSlice = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
