import { IMovieAPI } from "types";

export interface IMovieResponse {
  Search: IMovieAPI[];
  totalResults: string;
  Response: string;
  Error?: string;
}
