import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
const NavbarMain = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1100px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-40 flex gap-4 mt-2 animate-fadeInDown">
      <div className="flex justify-between w-full max-w-[900px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange hover:border-cyan hover:shadow-cyanShadow transition-all duration-500 ease-out">
        <NavbarLogo />
        <div
          className={`${
            menuOpen ? "lg:block" : "lg:hidden"
          } lg:block transition-all duration-300 ease-out`}
        >
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border border-orange hover:border-cyan hover:shadow-cyanShadow transition-all duration-300 ease-out">
        <button
          className="text-3xl p-3 border border-orange rounded-full text-white cursor-pointer hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 ease-out"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
