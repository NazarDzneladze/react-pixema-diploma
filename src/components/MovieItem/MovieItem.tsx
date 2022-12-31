import { IMovie } from "types";
import { MoviePoster, MovieTitle, StyledMovieItem } from "./style";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
  return (
    <StyledMovieItem>
      <MoviePoster src={movie.poster} />
      <MovieTitle>{movie.title}</MovieTitle>
    </StyledMovieItem>
  );
};
