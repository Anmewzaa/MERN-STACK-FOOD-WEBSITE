import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";

const Layout = () => {
  return (
    <div className="xl:container mx-auto md:p-6 sm:p-5 p-4 ">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
