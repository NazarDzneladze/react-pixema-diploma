import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieAPI, transformMovieDetails } from "services";
import { IMovieDetails } from "types";

interface IMoviesState {
  movieDetails: IMovieDetails;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieDetails = createAsyncThunk<IMovieDetails, string, { rejectValue: string }>(
  "details/fetchMovieDetails",
  async (imdb, { rejectWithValue }) => {
    try {
      const movieDetails = await MovieAPI.getMovieByIMDB(imdb);
      const transformedMovieDetails = transformMovieDetails(movieDetails);

      return transformedMovieDetails;
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
  movieDetails: {} as IMovieDetails,
  isLoading: false,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieDetails = action.payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.error = action.payload;
      }
    });
  },
});

export default detailsSlice.reducer;
