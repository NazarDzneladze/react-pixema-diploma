import { IMovie, IMovieAPI } from "types";

export const transformMovies = (movies: IMovieAPI[]): IMovie[] => {
  return movies.map((movie) => ({
    title: movie.Title,
    year: movie.Type,
    imdbID: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  }));
};
