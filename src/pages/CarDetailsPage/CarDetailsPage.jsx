import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getCarDetails } from "../../redux/CarDetails/operations.js";
import {
  selectCarDetails,
  selectCarDetailsLoading,
  selectCarDetailsError,
} from "../../redux/CarDetails/selectors.js";

import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";

const CarDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const car = useSelector(selectCarDetails);
  const isLoading = useSelector(selectCarDetailsLoading);
  const error = useSelector(selectCarDetailsError);

  const fetchCarDetails = useCallback(() => {
    dispatch(getCarDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchCarDetails();
  }, [fetchCarDetails]);

  if (isLoading) return <Loader />;
  if (error || !car?.id) return <NotFoundPage />;

  return <CarDetails car={car} />;
};

export default CarDetailsPage;
