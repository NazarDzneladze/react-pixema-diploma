import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MoviePoster, MovieTitle, StyledMovieItem } from "./style";

interface IProps {
  movie: IMovie;
}

export const MovieItem = ({ movie: { imdbID, poster, title } }: IProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { imdb: imdbID })}>
        <MoviePoster src={poster} alt={title} />
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </StyledMovieItem>
  );
};
