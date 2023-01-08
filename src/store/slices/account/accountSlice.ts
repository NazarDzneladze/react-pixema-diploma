import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { app } from "firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IUserInfo } from "types";

interface IAccountState {
  user: IUserInfo;
}

// export const signIn = createAsyncThunk(
//   "accountSlice/signIn",
//   async (email: string, password: string) => {
//     const auth = getAuth(app);
//     const newUser = await createUserWithEmailAndPassword(auth, email, password);
//   },
// );

const initialState: IAccountState = {
  user: {} as IUserInfo,
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {},
});

export default accountSlice.reducer;
