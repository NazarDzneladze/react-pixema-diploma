import { Header, MovieList } from "components";
import { selectFavoritesMovies, useAppSelector } from "store";
import { StyledFavoritesPage } from "./styles";

export const FavoritesPage = () => {
  const { favoritesMovies } = useAppSelector(selectFavoritesMovies);

  return (
    <StyledFavoritesPage>
      <Header />
      <MovieList movies={favoritesMovies} />
    </StyledFavoritesPage>
  );
};
