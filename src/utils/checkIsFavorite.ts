import { IMovieDetails } from "types";

export const checkIsFavorite = (imdb: string) => {
  const notParsedFavorites = localStorage.getItem("favorites");

  if (notParsedFavorites !== null) {
    const favorites = JSON.parse(notParsedFavorites);
    if (favorites.find((favorite: IMovieDetails) => favorite.imdbID === imdb)) {
      return true;
    } else {
      return false;
    }
  }
};
