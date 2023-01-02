import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MoviePoster, MovieTitle, StyledMovieItem } from "./style";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie }: IProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { imdb: movie.imdbID })}>
        <MoviePoster src={movie.poster} />
        <MovieTitle>{movie.title}</MovieTitle>
      </Link>
    </StyledMovieItem>
  );
};
