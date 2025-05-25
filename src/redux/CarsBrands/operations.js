import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../services/api";

export const getBrandsList = createAsyncThunk(
  "brands/getBrandsList",
  async (_, thunkApi) => {
    try {
      const { data } = await carsApi.get("/brands");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
