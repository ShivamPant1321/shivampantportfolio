import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 bg-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-white relative my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="z-50 w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-neutral-400">2022 - 2026</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="z-50 w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold text-white">
            B.Tech in Computer Science and Engineering
          </h6>
          <p className="mb-4 text-neutral-400">
            VIT Bhopal University <br />
            Current CGPA: 9.06
          </p>
        </motion.div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="z-50 w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-neutral-400">2021 - 2022</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="z-50 w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold text-white">
            Senior Secondary (12th)
          </h6>
          <p className="mb-4 text-neutral-400">
            BCM Arya Model Sr. Sec. School <br />
            Percentage: 87%
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
