"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90, color: "bg-yellow-500" },
  { name: "React", level: 85, color: "bg-blue-500" },
  { name: "Shooting", level: 95, color: "bg-green-500" },
  { name: "CSS", level: 80, color: "bg-red-500" },
  { name: "Python", level: 50, color: "bg-purple-500" },
];

const About = () => {
  return (
    <motion.section
      className="py-16 bg-black text-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* About Section */}
      <section>
        <div className="max-w-4xl mx-auto p-7">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
              <img
                src="./assets/Jerome.jpg"
                alt="Jerome pic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="mb-4 text-lg text-justify">
                Hi, I am Jerome Cesar G Aguas, a front-end developer currently
                doing my OJT. I specialize in web designing and React. My goal
                is to create more innovative and user-friendly apps.
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                  LinkedIn
                </button>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                  GitHub
                </button>
                <button className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="max-w-4xl mx-auto p-7">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="space-y-4">
            {skills.map(({ name, level, color }) => (
              <div key={name} className="flex items-center">
                <span className="w-24 font-semibold">{name}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className={`h-2.5 rounded-full ${color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default About;
