import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Loader from "../../components/Loader/Loader";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
