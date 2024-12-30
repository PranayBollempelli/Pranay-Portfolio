import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import NavItems from "../contexts/navLinks";

function Navbar() {
  // Menu Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main Navbar Container
    <div className="container mx-auto ">
      <div className="h-20 px-5 md:px-14 shadow-md fixed top-0 left-0 w-full flex bg-white z-50 justify-between">
        {/* Logo Container */}
        <Link to="/" className="self-center">
          <div className="flex justify-center items-center">
            <div className="bg-secondary mr-4 h-6 w-6 lg:h-12 lg:w-12 rounded-full flex justify-center items-center ">
              <p className="text-white font-extrabold lg:text-4xl">P</p>
            </div>
            <h1 className="font-bold lg:text-2xl">Pranay</h1>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div className="block lg:hidden self-center">
          {isMenuOpen ? (
            <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        {/* Menu Container */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4 gap-14">
          {NavItems.map((item) => (
            <NavLink
              to={item.link}
              key={item.id}
              className={({ isActive }) =>
                isActive ? "text-black font-medium" : "menu-elements"
              }
            >
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-40">
            {NavItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? "text-black font-medium" : "menu-elements"
                }
                onClick={toggleMenu}
              >
                <p>{item.name}</p>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
