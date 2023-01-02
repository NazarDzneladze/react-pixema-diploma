import { transformMovieDetails } from "mappers";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovieDetails } from "store";
import { MoviePoster, StyledDetailsPage } from "./styles";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { movie } = useAppSelector((state) => state.detailsPage);
  const { imdb } = useParams();

  useEffect(() => {
    if (imdb) {
      dispatch(fetchMovieDetails(imdb));
    }
  }, [dispatch, imdb]);

  const handleBack = () => {
    navigate(-1);
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
  } = transformMovieDetails(movie);

  return (
    <StyledDetailsPage>
      <MoviePoster src={poster} />
      {genre?.split(", ").map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </StyledDetailsPage>
  );
};
