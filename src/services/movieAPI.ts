import axios from "axios";
import { IMovieDetailsAPI } from "types";
import { IMovieResponse } from "./types";

export class MovieAPI {
  private static readonly BASE_URL = process.env.REACT_APP_SERVICES_MOVIE_API_BASE_URL;

  private static readonly API = axios.create({
    baseURL: MovieAPI.BASE_URL,
  });

  static async getMovieBySearch(s: string, type = "movie", page: number) {
    const params = {
      s: s,
      type: type,
      page: page,
    };

    const { data } = await this.API.get<IMovieResponse>("", { params });
    console.log(data);

    return data;
  }

  static async getMovieByIMDB(imdb: string) {
    const params = {
      i: imdb,
      plot: "full",
    };

    const { data } = await this.API.get<IMovieDetailsAPI>("", { params });

    return data;
  }
}
