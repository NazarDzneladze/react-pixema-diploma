import axios from "axios";

export class MovieAPI {
  private static readonly BASE_URL = "https://www.omdbapi.com/?apikey=d4a0573f&";

  private static readonly API = axios.create({
    baseURL: MovieAPI.BASE_URL,
  });

  public static async getMovieBySearch(s: string, type = "movie") {
    const params = {
      s: s,
      type: type,
    };

    const { data } = await this.API.get("", {
      params,
    });

    return data.Search;
  }
}
