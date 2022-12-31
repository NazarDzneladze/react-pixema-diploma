export type MovieType = "movie" | "series" | "game" | "episode";

export interface IMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}
