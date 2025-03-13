"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Search,
  Star,
  Code,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const mockRepos = [
  {
    id: 1,
    name: "To Do List",
    description: "A simple Todo list application",
    language: "react",
    stargazers_count: 10,
    html_url: "https://github.com/Csar0427/ToDoList",
    homepage: "https://project1demo.com",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "Menu Augmented Reality",
    description: "A Web application Menu with Augmented Reality",
    language: "React",
    stargazers_count: 15,
    html_url: "https://github.com/AlnickClores/SystemMAR",
    homepage: "https://travelmugcafemenu.netlify.app/",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "iEquity Web Dev.",
    description: "OJT Web Dev",
    language: "Next.js Tailwind.css",
    stargazers_count: 5,
    html_url: "https://github.com/Csar0427/iEquity-Website/tree/iequity",
    homepage: "https://iequity-test.vercel.app/",
    imageUrl: "/placeholder.svg?height=200&width=400",
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("dark");
  const [activeProject, setActiveProject] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const filteredProjects = mockRepos.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Get language color
  const getLanguageColor = (language) => {
    const languageMap = {
      react: "bg-blue-500",
      "react.js": "bg-blue-500",
      javascript: "bg-yellow-500",
      typescript: "bg-blue-700",
      html: "bg-orange-500",
      css: "bg-blue-400",
      "next.js": "bg-black",
      "tailwind.css": "bg-cyan-500",
      python: "bg-green-500",
    };

    // Handle combined languages like "Next.js Tailwind.css"
    if (language.toLowerCase().includes("next.js")) {
      return "bg-gradient-to-r from-black to-cyan-500";
    }

    const lowerCaseLanguage = language.toLowerCase();
    return languageMap[lowerCaseLanguage] || "bg-gray-500";
  };

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-8">
        {/* Background elements - different from certificates page */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
                My Projects
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-500/30 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-cyan-500/30 rounded-full"></div>
            </div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              A showcase of my development work, personal projects, and
              collaborative efforts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-md mx-auto relative"
          >
            <div
              className={`absolute inset-0 rounded-lg ${
                isSearchFocused
                  ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-lg"
                  : "bg-transparent"
              } transition-all duration-300`}
            ></div>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="bg-black/40 backdrop-blur-md border-gray-700 focus:border-purple-500 focus:ring-purple-500/30 pl-10 py-6 text-white placeholder:text-gray-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className="group"
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <Card className="bg-black/40 backdrop-blur-xl border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col overflow-hidden relative">
                    {/* Diagonal design element - unique to projects */}
                    <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rotate-45 transform"></div>

                    <CardHeader className="p-0 relative">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.name}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60"></div>

                        {/* Project number - unique to projects */}
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>

                        {/* Language badge - positioned on image */}
                        <div className="absolute bottom-4 left-4">
                          <Badge
                            className={`${getLanguageColor(
                              project.language
                            )} text-white px-2.5 py-1`}
                          >
                            {project.language}
                          </Badge>
                        </div>

                        {/* Star count - positioned on image */}
                        <div className="absolute bottom-4 right-4 flex items-center bg-black/60 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/20">
                          <Star className="h-3.5 w-3.5 mr-1 text-yellow-400" />
                          <span className="text-xs">
                            {project.stargazers_count}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                          <Code className="h-4 w-4 text-purple-400" />
                        </div>
                        <CardTitle className="text-xl font-bold text-white">
                          {project.name}
                        </CardTitle>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Project tech stack icons - unique to projects */}
                      <div className="flex items-center gap-2 mt-auto">
                        <Layers className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          Tech Stack
                        </span>
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between p-6 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.html_url, "_blank")}
                        className="bg-transparent border-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 group"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        <span>GitHub</span>
                        <ArrowUpRight
                          size={14}
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                        />
                      </Button>

                      {project.homepage && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(project.homepage, "_blank")
                          }
                          className="bg-transparent border-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 group"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <span>Live Demo</span>
                          <ArrowUpRight
                            size={14}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-all"
                          />
                        </Button>
                      )}
                    </CardFooter>

                    {/* Hover effect - unique to projects */}
                    <AnimatePresence>
                      {activeProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 border-2 border-purple-500/30 rounded-lg pointer-events-none"
                        ></motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="inline-block p-4 rounded-full bg-gray-800/50 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-400">
                Try adjusting your search criteria
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
