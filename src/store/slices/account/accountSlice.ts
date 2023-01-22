import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IUserInfo } from "types";

interface IAccountState {
  user: IUserInfo;
  isLoading: boolean;
}

export const signUp = createAsyncThunk<
  IUserInfo,
  { email: string; password: string; name: string },
  { rejectValue: string }
>("account/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);

  return {
    name: name,
    email: email,
    password: password,
    id: user.uid,
  };
});

const initialState: IAccountState = {
  user: {} as IUserInfo,
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    // builder.addCase(signUp.rejected, (state, action) => {
    //   if (action.payload) {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   }
    // });
  },
});

export default accountSlice.reducer;
