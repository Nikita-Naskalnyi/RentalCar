import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../services/api";

export const getCarCatalog = createAsyncThunk(
  "CarCatalog/getCarCatalog",
  async (
    { brand, rentalPrice, minMileage, maxMileage, page = 1, pageSize = 12 },
    thunkApi
  ) => {
    try {
      const params = {};
      if (brand) params.brand = brand;
      if (rentalPrice) params.rentalPrice = rentalPrice;
      if (minMileage) params.minMileage = minMileage;
      if (maxMileage) params.maxMileage = maxMileage;
      params.page = page;
      params.limit = pageSize;

      const { data } = await carsApi.get(`/cars/`, { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
