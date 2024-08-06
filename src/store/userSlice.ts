import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index"
import { User } from "@/lib/data";

// Define a type for the user state
interface UserType {
    user: User | null;
  }
  
  // Define the initial state using that type
  const initialState: UserType = {
    user: null,
  };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state,  action: PayloadAction<User>) {
            state.user = action.payload;
          },
        logout (state) {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;