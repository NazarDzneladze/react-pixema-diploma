import { MovieItem } from "components";
import { IMovie } from "types";
import { StyledMovieList } from "./style";

interface IProps {
  movies: IMovie[];
}

export const MovieList = ({ movies }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} />
      ))}
    </StyledMovieList>
  );
};
