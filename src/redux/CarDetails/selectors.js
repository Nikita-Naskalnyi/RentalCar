export const selectCarDetails = (state) => state.carDetails.carDetails;
export const selectCarDetailsLoading = (state) =>
  state.carDetails.isCarDetailsLoading;
export const selectCarDetailsError = (state) =>
  state.carDetails.isCarDetailsError;
