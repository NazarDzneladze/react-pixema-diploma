import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "services";
import { IMovieDetailsAPI } from "types";

interface IMoviesState {
  movie: IMovieDetailsAPI;
  isLoading: boolean;
  error: null | string;
}

export const fetchMovieDetails = createAsyncThunk<
  IMovieDetailsAPI,
  string,
  { rejectValue: string }
>("details/fetchMovieDetails", async (imdb, { rejectWithValue }) => {
  try {
    return await MovieAPI.getMovieByIMDB(imdb);
  } catch (error) {
    return rejectWithValue("Error");
  }
});

const initialState: IMoviesState = {
  movie: {} as IMovieDetailsAPI,
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
      state.movie = action.payload;
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
