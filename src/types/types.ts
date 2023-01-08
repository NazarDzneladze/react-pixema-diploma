export interface IMovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieResponse {
  Search: IMovieAPI[];
  totalResults: string;
  Response: string;
}

export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface IMovieDetailsAPI {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  BoxOffice: string;
  Country: string;
  imdbRating: string;
  Poster: string;
  imdbID: string;
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
}

export interface IUserInfo {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
