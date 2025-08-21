import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const IconComponent = motion;

const HeroPic = () => {
  return (
    <IconComponent.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      <img
        src="/images/pic.png"
        className="max-h-[450px] bg-none animate-scaleIn hover:scale-105 transition-transform duration-500 ease-out relative z-10"
      ></img>

      {/* Enhanced background hexagon with multiple layers */}
      <div className="absolute -z-10 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Additional floating decorative elements with enhanced positioning */}
      <div className="absolute -z-20 top-10 right-10 w-3 h-3 bg-orange rounded-full opacity-60 animate-float animate-delay-300 hover:scale-150 transition-all duration-500 ease-out"></div>
      <div className="absolute -z-20 bottom-20 left-16 w-4 h-4 bg-cyan rounded-full opacity-50 animate-float animate-delay-500 hover:scale-150 transition-all duration-500 ease-out"></div>
      <div className="absolute -z-20 top-32 left-8 w-2 h-2 bg-lightOrange rounded-full opacity-40 animate-float animate-delay-700 hover:scale-150 transition-all duration-500 ease-out"></div>

      {/* New floating elements for better visual balance */}
      <div className="absolute -z-20 top-16 right-20 w-2 h-2 bg-white rounded-full opacity-30 animate-pulse animate-delay-200"></div>
      <div className="absolute -z-20 bottom-32 right-8 w-3 h-3 bg-lightCyan rounded-full opacity-45 animate-float animate-delay-600 hover:scale-125 transition-all duration-700 ease-out"></div>
      <div className="absolute -z-20 top-40 left-20 w-3 h-3 bg-orange rounded-full opacity-35 animate-ping animate-delay-400"></div>

      {/* Subtle geometric shapes */}
      <div className="absolute -z-20 top-24 right-16 w-2 h-2 border border-cyan/30 rotate-45 animate-float animate-delay-800 hover:rotate-180 transition-transform duration-1000 ease-out"></div>
      <div className="absolute -z-20 bottom-16 left-24 w-3 h-3 border border-orange/30 rotate-45 animate-float animate-delay-900 hover:rotate-180 transition-transform duration-1000 ease-out"></div>

      {/* Enhanced glow effects around the image */}
      <div className="absolute inset-0 -z-30">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan/5 to-orange/5 blur-3xl animate-pulse animate-delay-300"></div>
      </div>

      {/* Floating particles for dynamic effect */}
      <div className="absolute -z-20 top-8 left-12 w-2 h-2 bg-cyan rounded-full opacity-55 animate-ping animate-delay-100"></div>
      <div className="absolute -z-20 bottom-8 right-12 w-2 h-2 bg-orange rounded-full opacity-55 animate-ping animate-delay-500"></div>
      <div className="absolute -z-20 top-48 right-24 w-2 h-2 bg-white rounded-full opacity-30 animate-ping animate-delay-700"></div>
    </IconComponent.div>
  );
};

export default HeroPic;
