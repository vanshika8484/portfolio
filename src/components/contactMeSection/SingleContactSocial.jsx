import React from "react";

const SingleContactSocial = ({ Image, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center group animate-fadeInUp hover:scale-110 hover:border-cyan hover:text-cyan hover:shadow-cyanShadow transition-all duration-500 ease-out transform hover:-translate-y-1">
      <a 
        href={link} 
        className="cursor-pointer w-full h-full flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Social media link"
      >
        <Image className="group-hover:scale-110 transition-transform duration-300 ease-out" />
      </a>
    </div>
  );
};

export default SingleContactSocial;
