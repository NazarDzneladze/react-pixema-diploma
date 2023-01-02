import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "services";
import { IMovieAPI } from "types";

interface IMoviesState {
  movies: IMovieAPI[];
  isLoading: boolean;
  error: null | string;
}

export const fetchMovies = createAsyncThunk<IMovieAPI[], string, { rejectValue: string }>(
  "homePage/fetchMovies",
  async (movieName: string, { rejectWithValue }) => {
    try {
      return await MovieAPI.getMovieBySearch(movieName);
    } catch (error) {
      return rejectWithValue("Error");
    }
  },
);

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const homePageSlice = createSlice({
  name: "homePage",
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

export default homePageSlice.reducer;
