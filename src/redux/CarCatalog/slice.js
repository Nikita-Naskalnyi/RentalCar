import { createSlice } from "@reduxjs/toolkit";
import { getCarCatalog } from "./operations";

const initialState = {
  cars: [],
  totalCars: 0,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "CarCatalog",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarCatalog.fulfilled, (state, { payload }) => {
        const isFirstPage = state.currentPage === 1;
        const alreadyLoadedLastPage = state.cars.length >= state.totalCars;

        if (isFirstPage) {
          state.cars = payload.cars;
        } else {
          if (!alreadyLoadedLastPage) {
            state.cars = [...state.cars, ...payload.cars];
          }
        }

        state.totalCars = payload.totalCars;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getCarCatalog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const CarCatalogReducer = carsSlice.reducer;
export const { setCurrentPage } = carsSlice.actions;
