"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Download,
  MoveRightIcon as SwipeRight,
} from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  const [dragProgress, setDragProgress] = useState(0);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      router.push("/about"); // Swipe left to navigate to About page
    }
    setDragProgress(0);
  };

  const handleDrag = (event, info) => {
    // Calculate drag progress percentage (capped at 100%)
    const progress = Math.min(Math.abs(info.offset.x) / 100, 1);
    setDragProgress(progress);
  };

  return (
    <div className={`min-h-screen ${theme}`}>
      <motion.div
        className="min-h-screen py-32 flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center px-5 gap-10 max-w-[1040px] relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              Jerome Cesar Aguas
            </h1>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl max-w-2xl m-auto">
              <span className="text-cyan-400 font-medium">Web Designer</span> |
              <span className="text-white font-medium"> Developer</span> |
              <span className="text-amber-400 font-medium">
                {" "}
                Basketball Player
              </span>
            </p>

            <motion.a
              href="/assets/Aguas.pdf"
              download="Jerome_Cesar_Aguas_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download Resume</span>
              <ChevronRight
                size={16}
                className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />
            </motion.a>
          </motion.div>

          {/* Swipe indicator */}
          <motion.div
            className="mt-12 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <SwipeRight size={16} />
              Swipe left to learn more
            </p>

            {/* Progress bar */}
            <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"
                style={{ width: `${dragProgress * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-cyan-500/20 rounded-full"></div>
          <div className="absolute top-8 right-8 w-24 h-24 border-2 border-amber-500/20 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
