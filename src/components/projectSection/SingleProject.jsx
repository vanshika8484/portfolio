import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const IconComponent = motion;
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <IconComponent.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end group`}
    >
      <div className="animate-fadeInUp animate-delay-200">
        <h2 className="md:text-3xl sm:text-3xl text-orange group-hover:text-cyan transition-colors duration-300 ease-out"> {name}</h2>
        <h2
          className={`text-2xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          } group-hover:text-lightCyan transition-colors duration-300 ease-out`}
        >
          {year}
        </h2>
        <a
          href={link}
          className={`text-2xl flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          } group-hover:scale-105 transform transition-transform duration-300 ease-out`}
        >
          View <BiSolidRightTopArrowCircle className="group-hover:rotate-45 transition-transform duration-300 ease-out" />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white hover:border-cyan hover:shadow-cyanShadow group-hover:shadow-lg">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden group-hover:bg-gradient-to-br from-cyan/30 to-orange/30"></div>
        <img src={image} alt="Project Image" className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" />
        
        {/* Enhanced overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
      </div>
    </IconComponent.div>
  );
};

export default SingleProject;
