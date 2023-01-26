import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IUserInfo } from "types";
import { FirebaseErrorCode, getFirebaseErrorMessage, getUserInitials } from "utils";

const getUserInfo = () => {
  const userInfo = localStorage.getItem("userInfo");

  if (userInfo !== null) {
    return JSON.parse(userInfo);
  } else return "";
};

interface IAccountState {
  name: string;
  email: string;
  isAuth: boolean;
  isLoading: boolean;
  error: null | string;
}

export const signUp = createAsyncThunk<
  { name: string; email: string },
  { email: string; password: string; name: string },
  { rejectValue: string }
>("account/signUp", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    return {
      name,
      email,
    };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const initialState: IAccountState = {
  name: getUserInfo() && getUserInfo().name,
  email: getUserInfo() && getUserInfo().email,
  isLoading: false,
  error: null,
  isAuth: getUserInfo() && getUserInfo().isAuth,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.name = payload.name;
      state.email = payload.email;
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
  },
});

export default accountSlice.reducer;
