"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      router.push("/about"); // Swipe left to navigate to About page
    }
  };

  return (
    <motion.div
      className="py-32 flex items-center justify-center text-white relative bg-black"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd} // Detect swipe
    >
      <div className="flex flex-col items-center px-5 gap-10 max-w-[1040px] relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-3"
        >
          Jerome Cesar Aguas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-sm max-w-2xl m-auto"
        >
          Web Designer | Developer | Basketball Player
        </motion.p>

        <motion.a
          href="/assets/Aguas.pdf"
          download="Jerome_Cesar_Aguas_Resume.pdf"
          className="border border-white text-white text-sm font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Download Resume
        </motion.a>

        <p className="text-sm mt-4 text-gray-400">Swipe left to learn more →</p>
      </div>
    </motion.div>
  );
};

export default Hero;
