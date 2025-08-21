import React from 'react';

const LoadingAnimation = ({ size = "medium", color = "orange" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12", 
    large: "w-16 h-16"
  };

  const colorClasses = {
    orange: "border-orange",
    cyan: "border-cyan",
    white: "border-white"
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute">
        <div className={`w-2 h-2 bg-${color} rounded-full animate-ping opacity-75`}></div>
      </div>
      
      {/* Floating dots */}
      <div className="flex gap-1 ml-4">
        <div className={`w-2 h-2 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`w-2 h-2 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`w-2 h-2 bg-${color} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;

