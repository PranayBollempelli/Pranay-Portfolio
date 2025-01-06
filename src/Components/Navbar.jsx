import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import NavItems from "../contexts/navLinks";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <div className="h-20 px-5 md:px-14 shadow-md fixed top-0 left-0 w-full flex bg-white z-50 justify-between">
        <div className="self-center cursor-pointer">
          <a className="flex justify-center items-center" href="home">
            <div className="bg-secondary mr-4 h-6 w-6 lg:h-12 lg:w-12 rounded-full flex justify-center items-center ">
              <p className="text-white font-extrabold lg:text-4xl">P</p>
            </div>
            <h1 className="font-bold lg:text-2xl">Pranay</h1>
          </a>
        </div>

        <div className="block lg:hidden self-center">
          {isMenuOpen ? (
            <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4 gap-14">
          {NavItems.map((item) => (
            <a href={item.link} key={item.id} className="menu-elements">
              <p>{item.name}</p>
            </a>
          ))}
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-40">
            {NavItems.map((item) => (
              <a
                href={item.link}
                key={item.id}
                className="menu-elements"
                onClick={toggleMenu}
              >
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
