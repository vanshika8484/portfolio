import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 animate-fadeInUp group">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange hover:border-cyan hover:shadow-cyanShadow group-hover:shadow-lg">
          <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
            {imgSvg}
          </div>
        </div>
        <p className="text-white font-bold group-hover:text-orange transition-colors duration-300 ease-out">
          {text}
        </p>
      </div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10 group-hover:bg-cyan transition-colors duration-500 ease-out"></div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan/20 to-orange/20 blur-xl"></div>
      </div>
    </div>
  );
};

export default SingleSkill;
