import { IMovieDetailsAPI, IMovieDetails } from "types";

export const transformMovieDetails = (movie: IMovieDetailsAPI): IMovieDetails => {
  return {
    title: movie.Title,
    year: movie.Year,
    released: movie.Released,
    runtime: movie.Runtime,
    genre: movie.Genre,
    director: movie.Director,
    writer: movie.Writer,
    actors: movie.Actors,
    plot: movie.Plot,
    boxOffice: movie.BoxOffice,
    country: movie.Country,
    imdbRating: movie.imdbRating,
    poster: movie.Poster,
    imdbID: movie.imdbID,
  };
};
