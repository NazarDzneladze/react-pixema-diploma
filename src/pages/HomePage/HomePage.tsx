import { MovieList } from "components";
import { transformMovies } from "mappers";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(fetchMovies("indiana jones"));
  }, [dispatch]);

  const transformedMovies = transformMovies(movies);

  return <MovieList movies={transformedMovies} />;
};
