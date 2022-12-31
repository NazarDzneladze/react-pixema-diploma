import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "services";
import { IMovieAPI } from "types";

interface IMoviesState {
  movies: IMovieAPI[];
}

export const fetchMovies = createAsyncThunk<IMovieAPI[]>("homePage/fetchMovies", async () => {
  return await MovieAPI.getMovieBySearch("star wars");
});

const initialState: IMoviesState = {
  movies: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export default homePageSlice.reducer;
