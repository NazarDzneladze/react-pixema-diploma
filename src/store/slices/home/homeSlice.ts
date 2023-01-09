import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "services";
import { IMovie, IMovieAPI } from "types";

interface IMoviesState {
  movies: IMovieAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMovies = createAsyncThunk<IMovieAPI[], string, { rejectValue: string }>(
  "home/fetchMovies",
  async (movieName: string, { rejectWithValue }) => {
    try {
      return await MovieAPI.getMovieBySearch(movieName);
    } catch (error) {
      rejectWithValue("error");
    }
  },
);

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default homeSlice.reducer;

