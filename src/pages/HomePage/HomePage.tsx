import { Header, MovieList, Spinner } from "components";
import { useEffect, useState } from "react";
import { selectMovies, useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store";
import { IMovie } from "types";
import { getRandomMovieKeyWord } from "utils";
import { ErrorText, StyledHomePage } from "./style";

interface IParams {
  search: string;
  movies: IMovie[];
  page: number;
  type: string;
}

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const [params, setParams] = useState<IParams>({
    search: "" || getRandomMovieKeyWord(),
    movies: movies,
    page: 1,
    type: "movie",
  });

  useEffect(() => {
    dispatch(fetchMovies(params));
  }, [dispatch, params]);

  const handleSearch = (search: string) => {
    if (search !== "") {
      setParams((prevParams) => ({ ...prevParams, search, page: 1 }));
    }
  };

  const handleShowMore = () => {
    setParams((prevParams) => ({
      ...prevParams,
      page: prevParams.page + 1,
    }));
  };

  return (
    <StyledHomePage>
      <Header params={params} setParams={handleSearch} />
      {isLoading && <Spinner />}
      {error && <ErrorText>{error}</ErrorText>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      <button onClick={handleShowMore}>next page</button>
    </StyledHomePage>
  );
};
