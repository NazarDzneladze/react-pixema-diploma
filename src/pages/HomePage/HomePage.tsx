import { Header, MovieList, Spinner } from "components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store";
import { StyledHomePage } from "./style";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies, isLoading, error } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchMovies("indiana jones"));
  }, [dispatch]);

  return (
    <StyledHomePage>
      <Header />
      {isLoading && <Spinner />}
      {error && <span>{error}</span>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
    </StyledHomePage>
  );
};
