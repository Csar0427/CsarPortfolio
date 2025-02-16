"use client";

import React from "react";
import { motion } from "framer-motion";

const getStarted = () => {
  const element = document.getElementById("services");
  if (element) {
    const yOffset = -120;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <div className="py-32 flex items-center justify-center text-white relative bg-black">
      <div className="flex flex-col items-center px-5 gap-10 max-w-[1040px] relative z-10 text-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-3">
              Your Total Technology Provider
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg max-w-2xl m-auto"
          >
            We specialize in assisting businesses in procuring the best, most
            appropriate, and cost-effective IT equipment and solutions tailored
            to their needs.
          </motion.p>
        </div>

        <motion.button
          onClick={getStarted}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex gap-2 border border-white text-white text-sm font-semibold px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-30 transition duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
