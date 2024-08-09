import { categories } from "@/lib/data";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "@/store";

// // Define a type for the slice state
interface FilterState {
    filter: string;
  }

// // Define the initial state using that type
const initialState: FilterState = {
    filter: categories[0],
}
const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction< string >) => {
            state.filter = action.payload

        }
    },
});

export const { changeFilter } = filterSlice.actions;

export const selectCategory = (state: RootState) => state.filter.filter;

export default filterSlice.reducer;
