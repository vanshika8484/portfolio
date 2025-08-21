import React from "react";

const SingleInfo = ({ text, Image }) => {
  const IconComponent = Image;
   
  return (
    <div className="flex gap-4 items-center justify-start group animate-fadeInUp hover:scale-105 transition-all duration-300 ease-out">
      <IconComponent className="text-3xl group-hover:text-orange group-hover:scale-110 transition-all duration-300 ease-out" />
      <p className="group-hover:text-orange transition-colors duration-300 ease-out">{text}</p>
    </div>
  );
};

export default SingleInfo;
