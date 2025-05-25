import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.errorCode}>404</h1>
      <h2 className={s.title}>Oops! Page not found.</h2>
      <p className={s.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={s.homeButton} role="button">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
