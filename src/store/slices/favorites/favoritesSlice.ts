import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "types";

interface IFavoritesState {
  favoritesMovies: IMovie[];
}

const initialState: IFavoritesState = {
  favoritesMovies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      if (!state.favoritesMovies.find((favorite) => favorite.imdbID === payload.imdbID)) {
        state.favoritesMovies.push(payload);
      }
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavorite } = favoritesSlice.actions;
