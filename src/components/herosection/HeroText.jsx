import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const IconComponent = motion;
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <IconComponent.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        Front-End Web Developer
      </IconComponent.h2>
      <IconComponent.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        VANSHIKA AGGARWAL
      </IconComponent.h1>
      <IconComponent.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl mt-4 text-white "
      >
        Passionate Web Developer and Computer Science & Engineering student,
        <br></br>
        crafting sleek, responsive web interfaces with React and Tailwind CSS.
      </IconComponent.p>
    </div>
  );
};

export default HeroText;
