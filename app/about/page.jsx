"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Simplified skills array without levels
const skills = [
  { name: "JavaScript", color: "#FBBF24", icon: "JS" },
  { name: "React", color: "#0EA5E9", icon: "R" },
  { name: "Shooting", color: "#10B981", icon: "🏀" },
  { name: "CSS", color: "#F43F5E", icon: "CSS" },
  { name: "Python", color: "#8B5CF6", icon: "Py" },
];

// Custom icons (replace with your own if needed)
const Icons = {
  Linkedin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Github: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  ChevronRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
  Briefcase: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  ),
  Code: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  GraduationCap: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
    </svg>
  ),
  Heart: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
};

// Custom Badge component
const Badge = ({ children, className }) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
  >
    {children}
  </span>
);

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="mb-24"
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [theme, setTheme] = useState("dark");
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("journey");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white light:bg-gradient-to-br light:from-white light:via-gray-100 light:to-gray-200 light:text-slate-900">
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    src="./assets/Jerome.jpg"
                    alt="Jerome pic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-cyan-500/50 -z-0"></div>
                <div className="absolute -top-6 -left-6 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-amber-500/50 -z-0"></div>
              </motion.div>

              <div className="space-y-8">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                      Jerome Cesar G Aguas
                    </h1>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50">
                        Front-end Developer
                      </Badge>
                      <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/50">
                        Malabon City
                      </Badge>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg leading-relaxed"
                >
                  <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    Hi, I am Jerome Cesar G Aguas, a front-end developer
                    currently doing my OJT. I specialize in web designing and
                    React. My goal is to create more innovative and
                    user-friendly apps that make a positive impact.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <a
                    href="https://www.linkedin.com/in/jerome-cesar-aguas/"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all"
                  >
                    <Icons.Linkedin />
                    <span>LinkedIn</span>
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">
                      <Icons.ChevronRight />
                    </span>
                  </a>
                  <a
                    href="https://github.com/Csar0427"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 border border-slate-600 transition-all"
                  >
                    <Icons.Github />
                    <span>GitHub</span>
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">
                      <Icons.ChevronRight />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </Section>

          <Section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2 inline-block bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"></div>
            </div>

            {/* Custom Skills Visualization */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-gray-800 p-8">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-amber-500/10 rounded-2xl blur-3xl -z-10"></div>

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 4 + 1 + "px",
                      height: Math.random() * 4 + 1 + "px",
                      background: `rgba(255, 255, 255, ${
                        Math.random() * 0.2 + 0.1
                      })`,
                    }}
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                    }}
                    animate={{
                      x: [
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                      ],
                      y: [
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                      ],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 20,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                ))}

                {/* Animated gradient lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute h-px w-40 md:w-60 opacity-20"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${
                        skills[i % skills.length].color
                      }, transparent)`,
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      width: ["10%", "30%", "10%"],
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                  My Technical Toolkit
                </h3>

                {/* Crystal Prism Skills Visualization */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Crystal container */}
                      <div className="relative perspective-800">
                        <motion.div
                          className="relative w-32 h-32 transform-style-3d"
                          animate={{
                            rotateY: [0, 10, 0, -10, 0],
                            rotateX: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                          }}
                        >
                          {/* Crystal faces */}
                          <div
                            className="absolute inset-0 transform-gpu"
                            style={{
                              background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                              backdropFilter: "blur(8px)",
                              clipPath:
                                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                              boxShadow: `0 0 20px ${skill.color}30, inset 0 0 20px ${skill.color}20`,
                              border: `1px solid ${skill.color}50`,
                            }}
                          >
                            {/* Skill icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-3xl font-bold text-white">
                                {skill.icon}
                              </div>
                            </div>

                            {/* Light reflection */}
                            <div
                              className="absolute inset-0 opacity-50"
                              style={{
                                background: `linear-gradient(45deg, transparent 40%, ${skill.color}60 45%, ${skill.color}80 50%, ${skill.color}60 55%, transparent 60%)`,
                                animation: "shine 5s infinite linear",
                              }}
                            ></div>
                          </div>

                          {/* Bottom reflection */}
                          <div
                            className="absolute w-full h-4 bottom-0 transform translate-y-full opacity-30 blur-sm"
                            style={{
                              background: `radial-gradient(ellipse at center, ${skill.color} 0%, transparent 70%)`,
                            }}
                          ></div>
                        </motion.div>
                      </div>

                      {/* Skill name */}
                      <motion.div
                        className="mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="font-bold text-lg text-white">
                          {skill.name}
                        </div>
                      </motion.div>

                      {/* Animated particles around crystal */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={`skill-particle-${index}-${i}`}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ background: skill.color }}
                          initial={{
                            x: 0,
                            y: 0,
                            opacity: 0,
                          }}
                          animate={{
                            x: [0, (Math.random() - 0.5) * 60],
                            y: [0, (Math.random() - 0.5) * 60],
                            opacity: [0, 0.8, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Philosophy section */}
                <motion.div
                  className="relative p-6 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-amber-500/20 rounded-xl -z-10"></div>
                  <div className="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-xl -z-10"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="font-bold text-xl text-white mb-3">
                      My Development Philosophy
                    </div>
                    <p className="text-gray-300 mb-6">
                      I believe in creating intuitive, accessible, and
                      performant web experiences. My approach combines technical
                      expertise with creative problem-solving to build solutions
                      that not only work flawlessly but also delight users.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "User-Centric",
                        "Clean Code",
                        "Responsive",
                        "Accessible",
                        "Performant",
                        "Innovative",
                      ].map((value, i) => (
                        <motion.div
                          key={value}
                          className="bg-white/10 hover:bg-white/20 text-white py-1.5 px-3 rounded-md text-center text-sm transition-all"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {value}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Section>

          <Section>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2 inline-block bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                Experience & Background
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"></div>
            </div>

            {/* Fixed Tabs Implementation */}
            <div className="w-full">
              {/* Tab Navigation */}
              <div className="w-full grid grid-cols-2 md:grid-cols-4 bg-black/40 backdrop-blur-md rounded-xl p-1 mb-8">
                <button
                  onClick={() => setActiveTab("journey")}
                  className={`py-2 px-4 rounded-lg transition-all ${
                    activeTab === "journey"
                      ? "bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 text-cyan-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  My Journey
                </button>
                <button
                  onClick={() => setActiveTab("expertise")}
                  className={`py-2 px-4 rounded-lg transition-all ${
                    activeTab === "expertise"
                      ? "bg-gradient-to-r from-amber-500/20 to-amber-500/20 text-amber-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Expertise
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`py-2 px-4 rounded-lg transition-all ${
                    activeTab === "education"
                      ? "bg-gradient-to-r from-emerald-500/20 to-emerald-500/20 text-emerald-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`py-2 px-4 rounded-lg transition-all ${
                    activeTab === "personal"
                      ? "bg-gradient-to-r from-rose-500/20 to-rose-500/20 text-rose-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Personal
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-amber-500/10 to-emerald-500/10 rounded-2xl blur-3xl"></div>

                {/* Journey Tab Content */}
                {activeTab === "journey" && (
                  <div className="mt-0">
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 rounded-lg bg-cyan-500/20">
                            <Icons.Briefcase className="w-6 h-6 text-cyan-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            My Development Journey
                          </h3>
                        </div>

                        <div className="space-y-12 relative">
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-amber-500 to-emerald-500"></div>

                          <div className="relative pl-12">
                            <div className="absolute left-0 w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            </div>
                            <div className="font-bold text-xl text-white mb-2">
                              Beginning of the Journey
                            </div>
                            <p className="text-gray-300">
                              Started with HTML and CSS, building simple
                              websites and discovering the joy of creating
                              things for the web. My curiosity led me to explore
                              more complex technologies and frameworks.
                            </p>
                          </div>

                          <div className="relative pl-12">
                            <div className="absolute left-0 w-8 h-8 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            </div>
                            <div className="font-bold text-xl text-white mb-2">
                              Learning and Growth
                            </div>
                            <p className="text-gray-300">
                              Dove deep into JavaScript and modern frameworks
                              like React. Participated in coding bootcamps and
                              online courses to strengthen my foundation.
                            </p>
                          </div>

                          <div className="relative pl-12">
                            <div className="absolute left-0 w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            </div>
                            <div className="font-bold text-xl text-white mb-2">
                              Current Chapter
                            </div>
                            <p className="text-gray-300">
                              Currently doing my OJT, applying my skills in
                              real-world projects and continuing to learn new
                              technologies and best practices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expertise Tab Content */}
                {activeTab === "expertise" && (
                  <div className="mt-0">
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 rounded-lg bg-amber-500/20">
                            <Icons.Code className="w-6 h-6 text-amber-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Technical Skills
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-bold text-xl mb-4 text-white">
                                Frontend Development
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {[
                                  "React",
                                  "JavaScript",
                                  "HTML5",
                                  "CSS3",
                                  "Tailwind CSS",
                                  "Redux",
                                ].map((skill) => (
                                  <Badge
                                    key={skill}
                                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-1.5 px-3"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-bold text-xl mb-4 text-white">
                                Tools & Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {[
                                  "Git",
                                  "VS Code",
                                  "Figma",
                                  "npm",
                                  "Webpack",
                                  "REST APIs",
                                ].map((tool) => (
                                  <Badge
                                    key={tool}
                                    className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-1.5 px-3"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-amber-500/10 to-cyan-500/10 rounded-xl p-6 border border-white/10">
                            <h4 className="font-bold text-xl mb-4 text-white">
                              My Approach
                            </h4>
                            <ul className="space-y-3 text-gray-300">
                              <li className="flex items-start gap-2">
                                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                                <span>
                                  Focus on clean, maintainable code architecture
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                                <span>
                                  Prioritize responsive design and accessibility
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                                <span>
                                  Continuous learning and staying updated with
                                  latest trends
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500"></div>
                                <span>
                                  Collaborative problem-solving and team
                                  communication
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Education Tab Content */}
                {activeTab === "education" && (
                  <div className="mt-0">
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 rounded-lg bg-emerald-500/20">
                            <Icons.GraduationCap className="w-6 h-6 text-emerald-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Education
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-8">
                            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/20">
                              <div className="font-bold text-xl text-white mb-2">
                                Bachelor of Science in Information Technology
                              </div>
                              <div className="text-emerald-400 font-medium mb-4">
                                University of the East • 2020-2024
                              </div>
                              <p className="text-gray-300">
                                Focused on web development, software
                                engineering, and database management systems.
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-6 border border-emerald-500/20">
                              <div className="font-bold text-xl text-white mb-2">
                                Relevant Coursework
                              </div>
                              <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <span>Web Development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <span>Database Management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                  <span>Software Engineering</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/5 rounded-xl blur-xl"></div>
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 h-full border border-white/10">
                              <h4 className="font-bold text-xl mb-6 text-white">
                                Additional Learning
                              </h4>
                              <div className="space-y-6">
                                <div>
                                  <div className="font-medium text-emerald-400 mb-1">
                                    Online Courses & Certifications
                                  </div>
                                  <p className="text-gray-300">
                                    Continuously expanding my knowledge through
                                    platforms like Udemy, Coursera, and
                                    freeCodeCamp.
                                  </p>
                                </div>
                                <div>
                                  <div className="font-medium text-emerald-400 mb-1">
                                    Self-Directed Learning
                                  </div>
                                  <p className="text-gray-300">
                                    Regularly exploring new technologies and
                                    frameworks through documentation, tutorials,
                                    and building personal projects.
                                  </p>
                                </div>
                                <div>
                                  <div className="font-medium text-emerald-400 mb-1">
                                    Tech Community Involvement
                                  </div>
                                  <p className="text-gray-300">
                                    Participating in coding meetups, hackathons,
                                    and online developer communities to learn
                                    from peers.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Personal Tab Content */}
                {activeTab === "personal" && (
                  <div className="mt-0">
                    <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 rounded-lg bg-rose-500/20">
                            <Icons.Heart className="w-6 h-6 text-rose-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Personal Interests
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 rounded-xl p-6 border border-rose-500/20">
                            <h4 className="font-bold text-xl mb-4 text-white">
                              Hobbies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Basketball",
                                "Travel",
                                "Alfonso Light",
                                "Gaming",
                                "Music",
                              ].map((hobby) => (
                                <Badge
                                  key={hobby}
                                  className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-1.5 px-3"
                                >
                                  {hobby}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 rounded-xl p-6 border border-rose-500/20">
                            <h4 className="font-bold text-xl mb-4 text-white">
                              Fun Facts
                            </h4>
                            <ul className="space-y-3 text-gray-300">
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>Enjoys watching movies</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>
                                  Particularly enjoys strategy and RPG games
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>Preparing to be an NBA Player</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/5 rounded-xl p-6 border border-rose-500/20">
                            <h4 className="font-bold text-xl mb-4 text-white">
                              Goals
                            </h4>
                            <ul className="space-y-3 text-gray-300">
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>Contribute to open-source projects</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>
                                  Learn a new programming language every year
                                </span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                                <span>
                                  Attend international tech conferences
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .perspective-800 {
          perspective: 800px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
};

export default About;
