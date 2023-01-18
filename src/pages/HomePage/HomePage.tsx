import { Header, MovieList } from "components";
import { useEffect } from "react";
import { transformMovies } from "services";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store";
import { StyledHomePage } from "./style";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchMovies("indiana jones"));
  }, [dispatch]);

  return (
    <StyledHomePage>
      <Header />
      <MovieList movies={movies} />
    </StyledHomePage>
  );
};
