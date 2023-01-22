import { FavoritesIcon, IMDbIcon, NextSlideIcon } from "assets";
import { Header, Spinner } from "components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  addFavorite,
  fetchMovies,
  selectMovieDetails,
  selectMovies,
  useAppDispatch,
  useAppSelector,
} from "store";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
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
  Carousel,
} from "./styles";
import { useWindowSize } from "hooks";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const { movieDetails, error, isLoading } = useAppSelector(selectMovieDetails);
  const { movies } = useAppSelector(selectMovies);
  const { imdb = "" } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(imdb)).then(() => dispatch(fetchMovies("star wars")));
  }, [dispatch, imdb]);

  const handleAddFavorite = () => {
    dispatch(addFavorite(movieDetails));
  };

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
  } = movieDetails;

  return (
    <StyledDetailsPage>
      <Header />
      {isLoading && <Spinner />}
      {error && <span>{error}</span>}
      {movieDetails && (
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
            <button onClick={handleAddFavorite}>
              <FavoritesIcon />
            </button>
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
            <Carousel
              naturalSlideHeight={357}
              naturalSlideWidth={266}
              totalSlides={movies.length}
              visibleSlides={width >= 768 && width < 1440 ? 2 : width >= 1440 ? 4 : 1}
            >
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>
                <NextSlideIcon />
              </ButtonNext>
              <Slider style={{ gridColumn: "span 2" }}>
                {movies.map((movie, index) => (
                  <Slide index={index} key={movie.imdbID}>
                    <Image hasMasterSpinner={false} src={movie.poster} />
                    <p>{movie.title}</p>
                  </Slide>
                ))}
              </Slider>
            </Carousel>
          </MovieInfo>
        </DetailsContainer>
      )}
    </StyledDetailsPage>
  );
};
