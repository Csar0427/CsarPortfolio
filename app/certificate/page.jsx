"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, ExternalLink, Award, ChevronRight } from "lucide-react";

const CertificatesPage = () => {
  const [theme, setTheme] = useState("dark");
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Introduction to Javascript",
      issuer: "GreatLearning",
      date: "June 2024",
      image: "/Images/GreatLearning.png",
      file: "/certificates/intro_to_js.pdf",
      verifyUrl: "#",
      color: "cyan",
    },
    {
      id: 2,
      title: "Cloud Foundations",
      issuer: "Great Learning",
      date: "June 2024",
      image: "/Images/GreatLearning.png",
      file: "/certificates/cloud.pdf",
      verifyUrl:
        "https://olympus.mygreatlearning.com/courses/47409/certificate?pb_id=581",
      color: "amber",
    },
    {
      id: 3,
      title: "Getting Grounded on Analytics",
      issuer: "Coursebank",
      date: "March 2021",
      image: "/Images/CourseBank.jpg",
      file: "/certificates/analytics.pdf",
      verifyUrl: "#",
      color: "emerald",
    },
    {
      id: 4,
      title: "Introduction to Packet Tracer",
      issuer: "Cisco",
      date: "October 2023",
      image: "/placeholder.svg?height=200&width=300",
      file: "/certificates/packet_tracer.pdf",
      verifyUrl: "#",
      color: "rose",
    },
    {
      id: 5,
      title: "JavaScript Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
      file: "/certificates/js_algorithms.pdf",
      verifyUrl: "#",
      color: "violet",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        gradient: "from-cyan-500 to-cyan-600",
        hover: "group-hover:border-cyan-500/50",
      },
      amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
        gradient: "from-amber-500 to-amber-600",
        hover: "group-hover:border-amber-500/50",
      },
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        gradient: "from-emerald-500 to-emerald-600",
        hover: "group-hover:border-emerald-500/50",
      },
      rose: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        text: "text-rose-400",
        gradient: "from-rose-500 to-rose-600",
        hover: "group-hover:border-rose-500/50",
      },
      violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-400",
        gradient: "from-violet-500 to-violet-600",
        hover: "group-hover:border-violet-500/50",
      },
    };

    return colorMap[color] || colorMap.cyan;
  };

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 md:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent inline-block">
              Certificates & Achievements
            </h1>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              A collection of certifications that showcase my continuous
              learning journey and technical expertise.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certificates.map((cert) => {
              const colorClasses = getColorClasses(cert.color);

              return (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveCard(cert.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className="group"
                >
                  <Card
                    className={`bg-black/40 backdrop-blur-xl ${colorClasses.bg} border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 h-full flex flex-col`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-md ${colorClasses.bg}`}>
                          <Award className={`h-4 w-4 ${colorClasses.text}`} />
                        </div>
                        <CardTitle className="text-xl font-bold text-white">
                          {cert.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-grow">
                      <div
                        className={`relative aspect-[3/2] overflow-hidden rounded-lg border ${colorClasses.border} transition-all duration-300`}
                      >
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-medium ${colorClasses.text}`}
                          >
                            Issued by:
                          </span>
                          <span className="text-sm text-gray-300">
                            {cert.issuer}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-medium ${colorClasses.text}`}
                          >
                            Date:
                          </span>
                          <span className="text-sm text-gray-300">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-4 pt-2">
                      <a href={cert.file} download className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`w-full bg-transparent border-${cert.color}-500/50 hover:bg-gradient-to-r hover:${colorClasses.gradient} hover:text-white group transition-all duration-300`}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download</span>
                          <ChevronRight
                            size={14}
                            className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </Button>
                      </a>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className={`w-full bg-transparent border-${cert.color}-500/50 hover:bg-gradient-to-r hover:${colorClasses.gradient} hover:text-white group transition-all duration-300`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span>Verify</span>
                          <ChevronRight
                            size={14}
                            className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
