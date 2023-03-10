export interface IMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieDetailsAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface IMovieDetails {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  boxOffice: string;
  country: string;
  imdbRating: string;
  poster: string;
  imdbID: string;
  type: string;
}

export interface IUser {
  name: string;
  email: string;
  isAuth: boolean;
}

export interface IParams {
  search: string;
  page: number;
  type: string;
}
