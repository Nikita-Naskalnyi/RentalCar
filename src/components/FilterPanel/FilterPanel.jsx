import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { selectBrands } from "../../redux/CarsBrands/selectors";
import { getBrandsList } from "../../redux/CarsBrands/operations";

import s from "./FilterPanel.module.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import clsx from "clsx";

const FilterPanel = ({ onSearch }) => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);

  useEffect(() => {
    dispatch(getBrandsList());
  }, [dispatch]);

  const handleSearchClick = () => {
    const filters = {};
    if (selectedBrand) filters.brand = selectedBrand;
    if (selectedPrice) filters.rentalPrice = Number(selectedPrice);
    if (mileageFrom !== null) filters.minMileage = mileageFrom;
    if (mileageTo !== null) filters.maxMileage = mileageTo;
    onSearch(filters);
  };

  const isDisabled =
    !selectedBrand &&
    !selectedPrice &&
    mileageFrom === null &&
    mileageTo === null;

  const uniqueBrands = [...new Set(brands)];
  const uniquePrices = [30, 40, 50, 60, 70, 80];

  const handleMileageChange = (value, setter) => {
    const numeric = value.replace(/\D/g, "");
    setter(numeric ? Number(numeric) : null);
  };

  return (
    <div className={s.panel}>
      <div className={s.selects}>
        <CustomDropdown
          label="Car brand"
          value={selectedBrand}
          onChange={setSelectedBrand}
          options={uniqueBrands}
          placeholder="Choose a brand"
        />

        <CustomDropdown
          label="Price / 1 hour"
          value={selectedPrice}
          onChange={setSelectedPrice}
          options={uniquePrices.map((p) => p.toString())}
          placeholder="Choose a price"
        />

        <div className={s.selectGroup}>
          <label className={s.label}>Car mileage / km</label>
          <div className={s.inputGroup}>
            <div className={clsx(s.inputBox, s.inputBoxFirst)}>
              <span className={s.prefix}>From</span>
              <input
                type="text"
                inputMode="numeric"
                className={s.mileageInput}
                value={mileageFrom !== null ? mileageFrom.toLocaleString() : ""}
                onChange={(e) =>
                  handleMileageChange(e.target.value, setMileageFrom)
                }
              />
            </div>

            <div className={clsx(s.inputBox, s.inputBoxLast)}>
              <span className={s.prefix}>To</span>
              <input
                type="text"
                inputMode="numeric"
                className={s.mileageInput}
                value={mileageTo !== null ? mileageTo.toLocaleString() : ""}
                onChange={(e) =>
                  handleMileageChange(e.target.value, setMileageTo)
                }
              />
            </div>
          </div>
        </div>

        <button
          className={s.searchBtn}
          onClick={handleSearchClick}
          disabled={isDisabled}
        >
          Search
        </button>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default FilterPanel;
