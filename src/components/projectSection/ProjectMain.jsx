import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const IconComponent = motion;

const projects = [
  {
    name: "React AI Tool",
    year: "Aug 2025",
    align: "left",
    image: "/images/websiteImg5.webp",
    link: "https://react-ai-tool-zeta.vercel.app/",
  },
  {
    name: "To-Do List App",
    year: "June 2025",
    align: "right",
    image: "/images/websiteImg3.webp",
    link: "https://to-do-app-eight-fawn.vercel.app/",
  },
  {
    name: "Weather App",
    year: "May 2025",
    align: "left",
    image: "/images/websiteImg2.avif",
    link: "https://weather-app-one-pi-72.vercel.app/",
  },
  {
    name: "Calcify",
    year: "Jan 2025",
    align: "right",
    image: "/images/websiteImg1.webp",
    link: " https://vanshika8484.github.io/CodeAlpha_Calculator/",
  },
  {
    name: "StudySync Website",
    year: "Nov 2024",
    align: "left",
    image: "/images/websiteImg4.jpg",
    link: "https://vanshika8484.github.io/StudySyncWebsite/",
  },
];
const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <IconComponent.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </IconComponent.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
