import { IMDbIcon } from "assets";
import { Header } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { transformMovieDetails } from "services";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovieDetails } from "store";
import {
  DetailsContainer,
  DetailsHeader,
  GenreItem,
  GenreList,
  MoviePoster,
  MovieTitle,
  HeaderInfo,
  Runtime,
  StyledDetailsPage,
  Raiting,
  DetailsPreview,
  MovieInfo,
  Plot,
  OtherDetails,
  Info,
} from "./styles";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.details);
  const { imdb = "" } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(imdb));
  }, [dispatch, imdb]);

  const {
    title,
    year,
    released,
    runtime,
    genre,
    director,
    writer,
    actors,
    plot,
    boxOffice,
    country,
    imdbRating,
    poster,
    imdbID,
  } = transformMovieDetails(movie);

  return (
    <StyledDetailsPage>
      <Header />
      <DetailsContainer>
        <DetailsHeader>
          <GenreList>
            {genre?.split(", ").map((genre) => (
              <GenreItem key={genre}>{genre}</GenreItem>
            ))}
          </GenreList>
          <MovieTitle>{title}</MovieTitle>
          <HeaderInfo>
            <Raiting>
              <IMDbIcon />
              {imdbRating}
            </Raiting>
            <Runtime>{runtime}</Runtime>
          </HeaderInfo>
        </DetailsHeader>
        <DetailsPreview>
          <MoviePoster src={poster} />
        </DetailsPreview>
        <MovieInfo>
          <Plot>{plot}</Plot>
          <OtherDetails>
            <Info>Year</Info>
            <Info>{year}</Info>
            <Info>Released</Info>
            <Info>{released}</Info>
            <Info>BoxOffice</Info>
            <Info>{boxOffice}</Info>
            <Info>Country</Info>
            <Info>{country}</Info>
            <Info>Actors</Info>
            <Info>{actors}</Info>
            <Info>Director</Info>
            <Info>{director}</Info>
            <Info>Writers</Info>
            <Info>{writer}</Info>
          </OtherDetails>
        </MovieInfo>
      </DetailsContainer>
    </StyledDetailsPage>
  );
};
