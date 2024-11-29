
import { useState } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [showMenu ,setShowMenu] = useState(false);
  const toggleMenu = ()=>{
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className="bg-primary text-white py-6 relative z-50">
        <div className="container flex justify-between items-center">
          <h1 className="text-3xl font-semibold flex items-center justify-center gap-2">
            <IoRocketSharp />
            Space
          </h1>
          <ul className="hidden md:flex flex-row items-center gap-4 lg:gap-8 text-lg ">
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200"
              ></a>
              Home
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200"
              ></a>
              Features
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200"
              ></a>
              Pricing
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-3 py-2 hover:text-yellow-400 transition-colors duration-200"
              ></a>
              Contact Us
            </li>
            <li>
              <button className="border border-white px-6 py-2 rounded-full hover:shadow-custom-inset hover:bg-secondary hover:border-transparent transition-all duration-200">
                Login
              </button>
            </li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <HiMiniSquares2X2 className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>
      {/* {Mobile menu section} */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
