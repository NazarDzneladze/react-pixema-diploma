import { FavoriteFilmIcon, NoImageAvailableImg, TrendsIcon } from "assets";
import { memo } from "react";
import { generatePath, Link } from "react-router-dom";
import { ROUTE } from "router";
import { IMovie } from "types";
import { getRandomRating } from "utils";
import {
  MoviePoster,
  MovieTitle,
  PosterContainer,
  Rating,
  StyledMovieItem,
  TrendsLabel,
} from "./style";

interface IProps {
  movie: IMovie;
  isFavorite?: boolean;
  isTrends?: boolean;
}

export const MovieItem = memo(
  ({ movie: { imdbID, poster, title }, isFavorite, isTrends }: IProps) => {
    const movie = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };

    return (
      <StyledMovieItem variants={movie} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to={generatePath(ROUTE.HOME + ROUTE.DETAILS, { imdb: imdbID })}>
          <PosterContainer>
            <MoviePoster src={poster === "N/A" ? NoImageAvailableImg : poster} alt={title} />
            {isFavorite && <FavoriteFilmIcon />}
            {isTrends && (
              <TrendsLabel>
                <TrendsIcon />
                <Rating>{getRandomRating()}</Rating>
              </TrendsLabel>
            )}
          </PosterContainer>
          <MovieTitle>{title}</MovieTitle>
        </Link>
      </StyledMovieItem>
    );
  },
);
