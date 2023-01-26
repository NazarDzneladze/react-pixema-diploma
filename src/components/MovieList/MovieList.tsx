import { MovieItem } from "components";
import { IMovie } from "types";
import { checkIsFavorite } from "utils";
import { StyledMovieList } from "./style";

interface IProps {
  movies: IMovie[];
  isTrends?: boolean;
}

export const MovieList = ({ movies, isTrends }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => (
        <MovieItem
          movie={movie}
          key={movie.imdbID}
          isFavorite={checkIsFavorite(movie.imdbID)}
          isTrends={isTrends}
        />
      ))}
    </StyledMovieList>
  );
};
