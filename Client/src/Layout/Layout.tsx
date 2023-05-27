import { Outlet } from "react-router-dom";

import AppHeader from "../Components/AppHeader";
import AppFooter from "../Components/AppFooter";

const Layout = () => {
  return (
    <div>
      <div className="xl:container mx-auto md:p-6 sm:p-5 p-4 font-serif">
        <AppHeader />
        <Outlet />
      </div>
      <div className="mt-6">
        <AppFooter />
      </div>
    </div>
  );
};

export default Layout;
