import { Header, MovieList, Spinner } from "components";
import { useEffect, useState } from "react";
import { fetchTrends, useAppDispatch, useAppSelector } from "store";
import { selectTrends } from "store/selectors/trendsSelector";
import { IMovie } from "types";
import { getRandomMovieKeyWord } from "utils";
import { ErrorText, StyledTrendsPage } from "./styles";

interface IParams {
  search: string;
  movies: IMovie[];
  page: number;
  type: string;
}

export const TrendsPage = () => {
  const { movies, isLoading, error } = useAppSelector(selectTrends);
  const dispatch = useAppDispatch();
  const [params, setParams] = useState<IParams>({
    search: "" || getRandomMovieKeyWord(),
    movies: movies,
    page: 1,
    type: "movie",
  });

  useEffect(() => {
    dispatch(fetchTrends(params));
  }, [dispatch, params]);
  return (
    <StyledTrendsPage>
      <Header />
      {isLoading && <Spinner />}
      {error && <ErrorText>{error}</ErrorText>}
      {movies && movies.length > 0 && <MovieList movies={movies} isTrends />}
    </StyledTrendsPage>
  );
};
