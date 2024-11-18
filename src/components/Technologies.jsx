import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-neutral-900">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="text-white z-50 relative my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <RiReactjsLine className="z-50 text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <SiMongodb className="z-50 text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <SiRedux className="z-50 text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <FaNodeJs className="z-50 text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <SiPowerbi className="z-50 text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl z-50 border-4 border-neutral-800 p-4 w-32 h-32 flex items-center justify-center"
        >
          <FaJava className="z-50 text-7xl text-blue-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;