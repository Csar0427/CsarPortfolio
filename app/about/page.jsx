"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  GraduationCap,
  Heart,
  Briefcase,
  Linkedin,
  Github,
  Twitter,
  ChevronRight,
} from "lucide-react";

const skills = [
  { name: "JavaScript", level: 90, color: "bg-amber-400" },
  { name: "React", level: 85, color: "bg-cyan-500" },
  { name: "Shooting", level: 95, color: "bg-emerald-500" },
  { name: "CSS", level: 80, color: "bg-rose-500" },
  { name: "Python", level: 50, color: "bg-violet-500" },
];

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
                      <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 px-3 py-1 rounded-full">
                        Front-end Developer
                      </Badge>
                      <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/50 px-3 py-1 rounded-full">
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
                    href="https://www.linkedin.com/in/jerome-cesar-1a26a12ba/"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                  </a>
                  <a
                    href="https://github.com/Csar0427"
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 border border-slate-600 transition-all"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                    <ChevronRight
                      size={16}
                      className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${skill.color}`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                    <AnimatePresence>
                      {activeSkill === skill.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -right-4 top-0 w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-amber-500/20 rounded-2xl blur-3xl"></div>
                <Card className="relative bg-black/40 backdrop-blur-xl border-gray-800 rounded-2xl overflow-hidden h-full">
                  <div className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                      My Development Philosophy
                    </h3>
                    <p className="text-gray-300 mb-6">
                      I believe in creating intuitive, accessible, and
                      performant web experiences. My approach combines technical
                      expertise with creative problem-solving to build solutions
                      that not only work flawlessly but also delight users.
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        "User-Centric",
                        "Clean Code",
                        "Responsive",
                        "Accessible",
                        "Performant",
                        "Innovative",
                      ].map((value) => (
                        <Badge
                          key={value}
                          className="bg-white/10 hover:bg-white/20 text-white py-1.5 justify-center transition-all"
                        >
                          {value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
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

            <Tabs defaultValue="journey" className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 bg-black/40 backdrop-blur-md rounded-xl p-1 mb-8">
                <TabsTrigger
                  value="journey"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-cyan-400 rounded-lg transition-all"
                >
                  My Journey
                </TabsTrigger>
                <TabsTrigger
                  value="expertise"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500/20 data-[state=active]:to-amber-500/20 data-[state=active]:text-amber-400 rounded-lg transition-all"
                >
                  Expertise
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/20 data-[state=active]:to-emerald-500/20 data-[state=active]:text-emerald-400 rounded-lg transition-all"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="personal"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500/20 data-[state=active]:to-rose-500/20 data-[state=active]:text-rose-400 rounded-lg transition-all"
                >
                  Personal
                </TabsTrigger>
              </TabsList>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-amber-500/10 to-emerald-500/10 rounded-2xl blur-3xl"></div>

                <TabsContent value="journey" className="mt-0">
                  <Card className="bg-black/40 backdrop-blur-xl border-gray-800 rounded-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-cyan-500/20">
                          <Briefcase className="w-6 h-6 text-cyan-400" />
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
                            Started with HTML and CSS, building simple websites
                            and discovering the joy of creating things for the
                            web. My curiosity led me to explore more complex
                            technologies and frameworks.
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
                            Dove deep into JavaScript and modern frameworks like
                            React. Participated in coding bootcamps and online
                            courses to strengthen my foundation.
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
                  </Card>
                </TabsContent>

                <TabsContent value="expertise" className="mt-0">
                  <Card className="bg-black/40 backdrop-blur-xl border-gray-800 rounded-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-amber-500/20">
                          <Code className="w-6 h-6 text-amber-400" />
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
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="mt-0">
                  <Card className="bg-black/40 backdrop-blur-xl border-gray-800 rounded-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                          <GraduationCap className="w-6 h-6 text-emerald-400" />
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
                              Focused on web development, software engineering,
                              and database management systems.
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
                                  and online developer communities to learn from
                                  peers.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="personal" className="mt-0">
                  <Card className="bg-black/40 backdrop-blur-xl border-gray-800 rounded-2xl overflow-hidden">
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-rose-500/20">
                          <Heart className="w-6 h-6 text-rose-400" />
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
                              <span>Attend international tech conferences</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default About;
