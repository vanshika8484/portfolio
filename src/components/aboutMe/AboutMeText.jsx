import React from "react";

const AboutMeText = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white text-xl">
        Hi! I'm Vanshika Aggarwal, a passionate and detail-oriented web
        developer with a strong interest in technology, design, and continuous
        learning. I enjoy building digital experiences that are not only
        visually appealing but also intuitive and impactful. With a background
        in Computer Science, I strive to blend creativity with logic to develop
        efficient and innovative solutions. I'm always excited to take on new
        challenges, explore new tools, and grow both personally and
        professionally.
      </p>
      <button 
        onClick={scrollToProjects}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan hover:border-cyan hover:scale-110 "
      >
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
