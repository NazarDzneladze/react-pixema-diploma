import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  movie: {},
  isLoading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {},
});

export default accountSlice.reducer;
