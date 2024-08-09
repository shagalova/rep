import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index"
import { User } from "@/lib/data";

// Define a type for the user state
interface IAuthState {
    authState: boolean;
  }
  
  // Define the initial state using that type
  const initialState: IAuthState = {
    authState: false,
  };

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state,  action: PayloadAction<boolean>) {
            state.authState = action.payload;
          },
    },
});

export const { setAuth } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;