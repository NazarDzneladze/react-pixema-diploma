import { store } from "./store";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { toggleTheme } from "./theme/themeSlice";
import { fetchMovies } from "./homePage/homePageSlice";

export { store, useAppSelector, useAppDispatch, toggleTheme, fetchMovies };
