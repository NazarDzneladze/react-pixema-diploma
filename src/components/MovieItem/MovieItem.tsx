import { FavoriteFilmIcon } from "assets";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { MoviePoster, MovieTitle, PosterContainer, StyledMovieItem } from "./style";

interface IProps {
  movie: IMovie;
  isFavorite?: boolean;
}

export const MovieItem = ({ movie: { imdbID, poster, title }, isFavorite }: IProps) => {
  return (
    <StyledMovieItem>
      <Link to={generatePath(ROUTE.DETAILS, { imdb: imdbID })}>
        <PosterContainer>
          <MoviePoster src={poster} alt={title} />
          {isFavorite && <FavoriteFilmIcon />}
        </PosterContainer>
        <MovieTitle>{title}</MovieTitle>
      </Link>
    </StyledMovieItem>
  );
};
