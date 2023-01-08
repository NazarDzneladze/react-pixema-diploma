import { store } from "./store";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { toggleTheme } from "./slices/theme/themeSlice";
import { fetchMovies } from "./slices/home/homeSlice";
import { fetchMovieDetails } from "./slices/details/detailsSlice";

export { store, useAppSelector, useAppDispatch, toggleTheme, fetchMovies, fetchMovieDetails };
