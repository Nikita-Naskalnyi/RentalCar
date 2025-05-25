import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../services/api";

export const getCarDetails = createAsyncThunk(
  "carDetails/getCarDetails",
  async (id, thunkApi) => {
    try {
      const { data } = await carsApi.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
