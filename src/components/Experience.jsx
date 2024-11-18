import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-white relative my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="z-50 w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className="z-50 w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, ind) => (
                  <span
                    key={ind}
                    className="mr-2 mt-4 bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-600 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
