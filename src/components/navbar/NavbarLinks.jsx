import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-2xl text-white font-body lg:flex-row max-[639px]:flex-col lg:relative max-[639px]:absolute max-[639px]:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md max-[639px]:text-xl max-[639px]:bg-cyan/30 backdrop-blur-lg lg:bg-black max-[639px]:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className="cursor-pointer sm:hover:text-white text-white lg:hover:text-cyan transition-all duration-500 "
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
