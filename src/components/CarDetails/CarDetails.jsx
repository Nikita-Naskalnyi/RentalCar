import PropTypes from "prop-types";
import sprite from "../../icons/sprite.svg";
import ReservationForm from "../ReservationForm/ReservationForm";
import s from "./CarDetails.module.css";
import clsx from "clsx";

const CarDetails = ({ car }) => {
  const {
    brand,
    model,
    year,
    img,
    address,
    mileage,
    rentalPrice,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = car;

  const yearFormatted = year;

  const renderListItems = (items) =>
    items.map((item, idx) => (
      <li key={`${item}-${idx}`} className={s.infoItem}>
        <svg className={s.icon}>
          <use href={`${sprite}#icon-checked`} />
        </svg>
        {item}
      </li>
    ));

  return (
    <main className={s.container}>
      <section className={s.imageSection}>
        <img className={s.image} src={img} alt={`${brand} ${model}`} />
        <section className={clsx(s.bookingSection, s.desktopBooking)}>
          <h2>Book your car now</h2>
          <p className={s.text}>
            Stay connected! We are always ready to help you.
          </p>
          <ReservationForm />
        </section>
      </section>

      <section className={s.detailsSection}>
        <div className={s.headerBox}>
          <header className={s.carHeader}>
            <div className={s.idWrapper}>
              <h1 className={s.title}>
                {brand} {model}, {yearFormatted}
              </h1>
              <p className={s.carId}>
                id: {img?.split("/").pop().split("-").shift()}
              </p>
            </div>
            <ul className={s.mapList}>
              <li className={s.mapItem}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-location`} />
                </svg>
                <span>{address.split(", ").slice(-2).join(", ")}</span>
              </li>
              <li className={s.mapItem}>
                <span>Mileage: {mileage.toLocaleString()} km</span>
              </li>
            </ul>
          </header>
          <div className={s.price}>
            <span>${rentalPrice}</span>
          </div>
          <p className={s.description}>{description}</p>
        </div>

        <section className={s.detailsBox}>
          <div className={s.detailBlock}>
            <h3>Rental Conditions</h3>
            <ul>{renderListItems(rentalConditions)}</ul>
          </div>

          <div>
            <h3>Car Specifications:</h3>
            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-calendar`} />
                </svg>
                <span>Year: {yearFormatted}</span>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-car`} />
                </svg>
                <span>Type: {type}</span>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-fuel-pump`} />
                </svg>
                <span>Fuel Consumption: {fuelConsumption}/day</span>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-gear`} />
                </svg>
                <span>Engine Size: {engineSize}</span>
              </li>
            </ul>
          </div>

          <div className={s.detailBlock}>
            <h3>Accessories and functionalities:</h3>
            <ul>{renderListItems([...accessories, ...functionalities])}</ul>
          </div>
        </section>
      </section>
    </main>
  );
};

CarDetails.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarDetails;
