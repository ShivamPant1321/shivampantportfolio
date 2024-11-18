import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 z-50 relative">
      <h1 className="text-white z-50 my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img className="rounded-2xl lg:w-[35vw] md:w-[48vw] sm:w-96" src={aboutImg} alt="about" />
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
