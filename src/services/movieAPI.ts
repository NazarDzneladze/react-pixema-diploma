import axios from "axios";

export class MovieAPI {
  private static readonly BASE_URL = process.env.REACT_APP_SERVICES_MOVIE_API_BASE_URL;

  private static readonly API = axios.create({
    baseURL: MovieAPI.BASE_URL,
  });

  static async getMovieBySearch(s: string, type = "movie") {
    const params = {
      s: s,
      type: type,
    };

    const { data } = await this.API.get("", { params });

    return data.Search;
  }

  static async getMovieByIMDB(imdb: string) {
    const params = {
      i: imdb,
      plot: "full",
    };

    const { data } = await this.API.get("", { params });

    return data;
  }
}
