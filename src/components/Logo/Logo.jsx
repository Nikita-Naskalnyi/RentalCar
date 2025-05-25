import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <span className={s.logo}>
      Rental<span className={s.logocar}>Car</span>
    </span>
  );
};
