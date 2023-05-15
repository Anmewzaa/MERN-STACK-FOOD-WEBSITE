import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavItem = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
];

const AppHeader = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-6">
      <h1 className="w-full text-3xl font-bold">ANMEW.</h1>
      <ul className="hidden : md:flex">
        {NavItem.map((item) => (
          <Link key={item.name} to={item.path} className="p-4">
            {item.name}
          </Link>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-20 left-0 w-full h-auto ease-in-out duration-500 md:hidden bg-white z-50"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col">
          {NavItem.map((item) => (
            <Link
              onClick={() => setNav(true)}
              key={item.name}
              to={item.path}
              className="p-6 uppercase border-b border-gray-200"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
