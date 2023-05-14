import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";

import "./Layout.scss";

const Layout = () => {
  return (
    <div className="main-container">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
