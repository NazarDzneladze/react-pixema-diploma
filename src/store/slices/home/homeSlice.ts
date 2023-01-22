import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieAPI, transformMovies } from "services";
import { IMovie } from "types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMovies = createAsyncThunk<IMovie[], string, { rejectValue: string }>(
  "home/fetchMovies",
  async (movieName, { rejectWithValue }) => {
    try {
      const movies = await MovieAPI.getMovieBySearch(movieName);
      const transformedMovies = transformMovies(movies.Search);

      return transformedMovies;
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
        state.error = action.payload;
      }
    });
  },
});

export default homeSlice.reducer;
