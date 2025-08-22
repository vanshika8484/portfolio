import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-40 w-full max-w-[1100px] px-4 mt-2 animate-fadeInDown">
      <div className="flex items-center justify-between bg-black p-6 rounded-full border border-orange hover:border-cyan hover:shadow-cyanShadow transition-all duration-500 ease-out">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links + Button */}
        <div className="hidden lg:flex items-center gap-6">
          <NavbarLinks />
          <NavbarBtn />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl p-3 border border-orange rounded-full text-white cursor-pointer hover:border-cyan hover:text-cyan hover:scale-110 transition-all duration-300 ease-out"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="lg:hidden mt-2 flex flex-col items-center bg-black p-6 rounded-2xl border border-orange gap-4">
          <NavbarLinks />
          <NavbarBtn />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
