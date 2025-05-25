import { createSlice } from "@reduxjs/toolkit";
import { getBrandsList } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBrandsList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBrandsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getBrandsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const brandsReducer = brandsSlice.reducer;
