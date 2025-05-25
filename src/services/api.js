import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});
