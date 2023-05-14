import { Link } from "react-router-dom";
import { AiTwotoneHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Log in",
    path: "/login",
  },
];

const AppHeader = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <div className="p-7 bg-white shadow md:flex md:items-center md:justify-between ">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center cursor-pointer">
          <AiTwotoneHeart />
          <Link to={"/"} className="px-1">
            Punyakon
          </Link>
        </div>
        <span
          className="text-3xl cursor-pointer md:hidden block mx-2"
          onClick={() => setCloseMenu(!closeMenu)}
        >
          {closeMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>
      </div>
      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto left-0 md:py-0 py-4 md:pl-0 pl-5 md:opacity-100 top-[-4000px] transition-all ease-in duration-300 ${
          closeMenu ? "opacity-300 top-[70px] z-[100]" : ""
        }`}
      >
        {Nav.map((item) => (
          <li key={item.name} className="md:my-0 mx-4 my-6 uppercase ">
            <Link to={item.path} onClick={() => setCloseMenu(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppHeader;
