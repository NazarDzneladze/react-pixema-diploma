export type MovieType = "movie" | "series" | "game" | "episode";

export interface IMovie {
  title: string;
  year: MovieType;
  imdbID: string;
  type: string;
  poster: string;
}
