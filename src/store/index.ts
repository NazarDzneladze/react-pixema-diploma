import { store } from "./store";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { toggleTheme } from "./slices/theme/themeSlice";
import { fetchMovies } from "./slices/home/homeSlice";
import { fetchMovieDetails } from "./slices/details/detailsSlice";
import { signUp } from "./slices/account/accountSlice";
import { selectFavoritesMovies } from "./selectors/favoritesSelector";
import { addFavorite } from "./slices/favorites/favoritesSlice";
import { selectMovieDetails } from "./selectors/movieDetailsSelector";
import { selectMovies } from "./selectors/moviesSelector";
import { selectTheme } from "./selectors/themeSelector";
import { selectAccount } from "./selectors/accountSelector";
import { fetchTrends } from "./slices/trends/trendsSlice";

export {
  fetchTrends,
  selectAccount,
  selectTheme,
  selectMovies,
  selectMovieDetails,
  addFavorite,
  selectFavoritesMovies,
  store,
  signUp,
  useAppSelector,
  useAppDispatch,
  toggleTheme,
  fetchMovies,
  fetchMovieDetails,
};
