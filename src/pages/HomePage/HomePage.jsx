import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <h1 className={s.titleHome}>Find your perfect rental car</h1>
        <h2 className={s.subtitleHome}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link to="/catalog" className={s.btn} role="button" tabIndex={0}>
          View Catalog
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
