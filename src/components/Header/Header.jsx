import { Navbar } from "../Navbar/Navbar.jsx";
import { Logo } from "../Logo/Logo.jsx";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.header}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
