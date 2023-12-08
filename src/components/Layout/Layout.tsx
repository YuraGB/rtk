import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import classes from "./layout.module.scss";
import { Header } from "../../modules/headerModule";

const Layout = (): ReactNode => {
  return (
    <main className={classes.main}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
