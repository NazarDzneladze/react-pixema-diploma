import { IMovieDetails } from "types";

export const checkIsFavorite = (imdb: string) => {
  const favoritesNot = localStorage.getItem("favorites");

  if (favoritesNot !== null) {
    const favorites = JSON.parse(favoritesNot);
    if (favorites.find((favorite: IMovieDetails) => favorite.imdbID === imdb)) {
      return true;
    } else {
      return false;
    }
  }
};
