import React from "react";
import { TbArrowDownRight } from "react-icons/tb";
const NavbarBtn = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownloadResume}
      className=" sm:px-0.5 px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border hover:border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange-400 hover:scale-110  transition-all duration-500 cursor-pointer"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <TbArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
