import { useEffect } from "react";
import { MovieAPI } from "services";
import { useAppDispatch, useAppSelector } from "store";
import { fetchMovies } from "store/homePage/homePageSlice";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies);

  return <div>HomePage</div>;
};
