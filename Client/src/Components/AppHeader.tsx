import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { checkToken, logout } from "../Services/Authorize";
import Swal from "sweetalert2";

const AppHeader = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const logoutProcess = () => {
    Swal.fire({
      title: "ต้องการจะออกจากระบบหรือไม่ ?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logout(() => window.location.replace("/login"));
      }
    });
  };

  return (
    <div className="flex justify-between items-center h-20">
      <h1
        className="w-full text-3xl font-bold cursor-pointer"
        onClick={() => {
          window.location.replace("/");
        }}
      >
        ANMEW.
      </h1>
      <ul className="hidden : md:flex">
        <Link to={"/"} className="p-4">
          Home
        </Link>
        <Link to={"/menu"} className="p-4">
          Menu
        </Link>
        <Link to={"/about"} className="p-4">
          About
        </Link>
        {checkToken() ? (
          <button className="p-4" onClick={logoutProcess}>
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="p-4">
            Login
          </Link>
        )}
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
        <ul className="flex flex-col sticky">
          <Link
            to={"/"}
            className="p-6 uppercase border-b border-gray-200"
            onClick={() => {
              handleNav();
            }}
          >
            Home
          </Link>
          <Link
            to={"/menu"}
            className="p-6 uppercase border-b border-gray-200"
            onClick={() => {
              handleNav();
            }}
          >
            Menu
          </Link>
          <Link
            to={"/about"}
            className="p-6 uppercase border-b border-gray-200"
            onClick={() => {
              handleNav();
            }}
          >
            About
          </Link>
          {checkToken() ? (
            <button
              className="p-6 uppercase border-b border-gray-200"
              onClick={() => {
                handleNav();
                logoutProcess();
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="p-6 uppercase border-b border-gray-200"
              onClick={() => {
                handleNav();
              }}
            >
              login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
