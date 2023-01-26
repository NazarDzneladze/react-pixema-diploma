import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieAPI, transformMovies } from "services";
import { IMovie } from "types";
import { IParams } from "types/types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMovies = createAsyncThunk<IMovie[], IParams, { rejectValue: string }>(
  "home/fetchMovies",
  async ({ search, page, type }, { rejectWithValue }) => {
    try {
      const movies = await MovieAPI.getMovieBySearch(search, type, page);

      if (movies.Error) {
        return rejectWithValue(movies.Error);
      } else {
        return transformMovies(movies.Search);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
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
        state.movies = [];
        state.error = action.payload;
      }
    });
  },
});

export default homeSlice.reducer;
