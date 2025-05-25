import { createSlice } from "@reduxjs/toolkit";
import { getCarDetails } from "./operations";

const initialState = {
  isCarDetailsLoading: false,
  isCarDetailsError: null,
  carDetails: null,
};

const slice = createSlice({
  name: "carDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarDetails.pending, (state) => {
        state.isCarDetailsLoading = true;
        state.isCarDetailsError = null;
      })
      .addCase(getCarDetails.fulfilled, (state, { payload }) => {
        state.isCarDetailsLoading = false;
        state.carDetails = payload;
      })
      .addCase(getCarDetails.rejected, (state, { payload }) => {
        state.isCarDetailsLoading = false;
        state.isCarDetailsError = payload;
      });
  },
});

export const CarDetailsReducer = slice.reducer;
