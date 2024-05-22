import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo from "../assets/images/Logo.png";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Products" },
    { id: 4, text: "Features" },
    { id: 5, text: "Reviews" },
    { id: 6, text: "Contact Us" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1536px] mx-auto px-6 text-[var(--primary-text-color)]">
      {/* Logo */}
      {nav ? (
        <span className="opacity-0">logo</span>
      ) : (
        <img src={logo} className="w-[131px] sm:w-auto" alt="logo" />
      )}

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="py-2 px-4 hover:bg-[#343434] rounded-md m-2 cursor-pointer duration-300 hover:text-white"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* right icons */}
      <div className="hidden lg:flex gap-5 items-center">
        <FaUser size={20} className="cursor-pointer" />
        <IoCart size={23} className="cursor-pointer" />
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed z-30 lg:hidden left-0 top-0 w-[270px] md:w-[40%] h-full shadow-md bg-white ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <img src={logo} alt="logo" className="p-5" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-[#343434] duration-300 hover:text-white cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
