import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = ({ children, animation = "fadeInUp", delay = 0, threshold = 0.1, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-700 ease-out ${className}`;
    
    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fadeInLeft":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "fadeInRight":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`;
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref} 
      className={getAnimationClasses()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;

