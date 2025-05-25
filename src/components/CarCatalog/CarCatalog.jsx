import PropTypes from "prop-types";

import CarCard from "../CarCard/CarCard";
import s from "./CarCatalog.module.css";

const CarCatalog = ({ cars }) => {
  if (!cars?.length) {
    return <p className={s.emptyMessage}>No cars found.</p>;
  }

  return (
    <ul className={s.list} role="list">
      {cars.map((car) => (
        <li key={car.id} className={s.listItem} role="listitem">
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

CarCatalog.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarCatalog;
