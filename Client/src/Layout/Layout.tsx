import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";

const Layout = () => {
  return (
    <div className="xl:container mx-auto">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
