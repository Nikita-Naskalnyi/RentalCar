import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sprite from "../../icons/sprite.svg";
import s from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const src = car.img || "";
  const rentalPrice = `$${car.rentalPrice} `;

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`liked_${car.id}`);
    if (stored === "true") {
      setLiked(true);
    }
  }, [car.id]);

  const toggleLike = () => {
    const newState = !liked;
    setLiked(newState);
    localStorage.setItem(`liked_${car.id}`, newState.toString());
  };

  const shortAddress = () => {
    if (!car.address) return "";
    const parts = car.address.split(",").map((p) => p.trim());
    if (parts.length >= 3) {
      return `${parts[1]} | ${parts[2]} | \u00A0`;
    }
    return car.address;
  };

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  return (
    <div className={s.card}>
      <button
        className={`${s.like} ${liked ? s.liked : ""}`}
        onClick={toggleLike}
        aria-label="like"
        type="button"
      >
        {liked ? (
          <svg className={s.icon}>
            <use href={`${sprite}#icon-favorite`} />
          </svg>
        ) : (
          <svg className={s.icon}>
            <use href={`${sprite}#icon-outline-favorite`} />
          </svg>
        )}
      </button>

      <div className={s.imageWrapper}>
        {src ? (
          <img
            src={src}
            alt={`${car.brand} ${car.model}`}
            className={s.image}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={s.placeholder} aria-label="No image available">
            No image
          </div>
        )}
      </div>

      <div className={s.details}>
        <div className={s.box}>
          <h3 className={s.title}>
            {car.brand} <span className={s.model}>{car.model}</span>, {car.year}
          </h3>
          <div className={s.price}>{rentalPrice}</div>
        </div>
        <div className={s.det}>
          <p className={s.meta}>{shortAddress()}</p>
          <p className={s.rental}>{car.rentalCompany} | </p>
        </div>
        <p className={s.meta}>
          {capitalize(car.type)} | {car.mileage.toLocaleString()} km
        </p>
      </div>

      <Link className={s.link} to={`/catalog/${car.id}`}>
        <button type="button" className={s.btn}>
          Read more
        </button>
      </Link>
    </div>
  );
};

export default CarCard;
