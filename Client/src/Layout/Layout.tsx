import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";

const Layout = () => {
  return (
    <div className="main-container">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
