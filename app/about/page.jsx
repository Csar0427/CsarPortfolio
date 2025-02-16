"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, GraduationCap, Heart, Briefcase } from "lucide-react";

const skills = [
  { name: "JavaScript", level: 90, color: "bg-yellow-500" },
  { name: "React", level: 85, color: "bg-blue-500" },
  { name: "Shooting", level: 95, color: "bg-green-500" },
  { name: "CSS", level: 80, color: "bg-red-500" },
  { name: "Python", level: 50, color: "bg-purple-500" },
];

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section className="py-16 bg-black text-white">
      <Section>
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
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Jerome Cesar G Aguas</h2>
                <p className="text-gray-400">Front-end Developer</p>
                <p className="text-gray-400">Malabon City</p>
              </div>
              <p className="text-lg text-justify">
                Hi, I am Jerome Cesar G Aguas, a front-end developer currently
                doing my OJT. I specialize in web designing and React. My goal
                is to create more innovative and user-friendly apps that make a
                positive impact.
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
      </Section>
      <Section>
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
      </Section>
      <Section>
        <Tabs defaultValue="journey" className="mb-16 max-w-4xl mx-auto p-7">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900">
            <TabsTrigger value="journey">My Journey</TabsTrigger>
            <TabsTrigger value="expertise">Expertise</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>

          <TabsContent value="journey" className="mt-6">
            <Card className="p-6 bg-gray-900 border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">
                  My Development Journey
                </h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="font-medium text-white">
                    Beginning of the Journey
                  </div>
                  <p className="text-gray-400">
                    Started with HTML and CSS, building simple websites and
                    discovering the joy of creating things for the web. My
                    curiosity led me to explore more complex technologies and
                    frameworks.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="font-medium text-white">
                    Learning and Growth
                  </div>
                  <p className="text-gray-400">
                    Dove deep into JavaScript and modern frameworks like React.
                    Participated in coding bootcamps and online courses to
                    strengthen my foundation.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="font-medium text-white">Current Chapter</div>
                  <p className="text-gray-400">
                    Currently doing my OJT, applying my skills in real-world
                    projects and continuing to learn new technologies and best
                    practices.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="expertise" className="mt-6">
            <Card className="p-6 bg-gray-900 border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">
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
                      <Badge key={skill} className="bg-yellow-500 text-black">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">
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
                        variant="secondary"
                        className="bg-yellow-500"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <Card className="p-6 bg-gray-900 border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium text-white">
                    Bachelor of Science in Information Technology
                  </div>
                  <div className="text-sm text-gray-400">
                    University of the East • 2020-2024
                  </div>
                </li>
                <li>
                  <div className="font-medium text-white">
                    Relevant Coursework
                  </div>
                  <div className="text-sm text-gray-400">
                    Web Development, Database Management, Software Engineering
                  </div>
                </li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="personal" className="mt-6">
            <Card className="p-6 bg-gray-900 border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-semibold text-white">
                  Personal Interests
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">Hobbies</h4>
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
                        variant="secondary"
                        className="bg-white"
                      >
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Fun Facts</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Enjoys watching movies</li>
                    <li>• A particularly enjoy strategy and RPG games</li>
                    <li>• Preapering to be a NBA Player</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Goals</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Contribute to open-source projects</li>
                    <li>• Learn a new programming language every year</li>
                    <li>• Attend international tech conferences</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>
    </motion.section>
  );
};

export default About;
