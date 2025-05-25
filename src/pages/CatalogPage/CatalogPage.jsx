import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCarCatalog } from "../../redux/CarCatalog/operations";
import { setCurrentPage } from "../../redux/CarCatalog/slice";
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectCurrentPage,
  selectTotalPages,
} from "../../redux/CarCatalog/selectors";
import { selectBrands } from "../../redux/CarsBrands/selectors";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const brands = useSelector(selectBrands);

  const [filters, setFilters] = useState({});

  const fetchCars = useCallback(async () => {
    try {
      await dispatch(getCarCatalog({ ...filters, page })).unwrap();
    } catch {
      toast.error("Failed to load cars. Please try again later.", {
        toastId: "fetch-cars-error",
      });
    }
  }, [dispatch, filters, page]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleLoadMore = useCallback(() => {
    const nextPage = page + 1;

    if (page >= totalPages) {
      return;
    }

    dispatch(setCurrentPage(nextPage));

    const scrollOffset = window.innerHeight * 0.7;
    const targetScroll = window.scrollY + scrollOffset;

    setTimeout(() => {
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }, 300);
  }, [dispatch, page, totalPages]);

  const handleSearch = useCallback(
    (newFilters) => {
      setFilters(newFilters);
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  return (
    <div className={s.wrapper}>
      <FilterPanel onSearch={handleSearch} brands={brands} />

      {error && <p className={s.error}>{error}</p>}

      {isLoading && page === 1 ? (
        <Loader />
      ) : cars.length === 0 ? (
        <p className={s.emptyMessage}>No cars found matching your criteria.</p>
      ) : (
        <>
          <CarCatalog cars={cars} />
          {page < totalPages && (
            <div className={s.loadMoreWrapper}>
              {isLoading ? (
                <Loader />
              ) : (
                <button className={s.loadMore} onClick={handleLoadMore}>
                  Load more
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogPage;
