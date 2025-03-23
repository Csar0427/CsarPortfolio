"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink, Award, X } from "lucide-react";

const CertificatesPage = () => {
  const [theme, setTheme] = useState("dark");
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
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
      title: "Introduction to web development",
      issuer: "Microsoft",
      date: "March 2025",
      image: "/Images/microsoft.jpg",
      file: "/certificates/IntroductionWebdevMicrosoft.pdf",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/7BVEYNZUKG3V",
      color: "violet",
    },
    {
      id: 6,
      title: "Programming with javascript",
      issuer: "Meta",
      date: "March 2025",
      image: "/Images/meta.jpg",
      file: "/certificates/JavascriptIntro.pdf",
      verifyUrl:
        "https://www.coursera.org/account/accomplishments/verify/UVYL2XQYANQ8",
      color: "yellow",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        accent: "bg-cyan-500",
      },
      amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
        accent: "bg-amber-500",
      },
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        accent: "bg-emerald-500",
      },
      rose: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        text: "text-rose-400",
        accent: "bg-rose-500",
      },
      violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-400",
        accent: "bg-violet-500",
      },
      yellow: {
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        text: "text-yellow-400",
        accent: "bg-yellow-500",
      },
    };

    return colorMap[color] || colorMap.cyan;
  };

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 md:px-8 min-h-screen">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent inline-block">
              Certificates & Achievements
            </h1>
            <div className="h-1 w-40 mx-auto bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              A collection of certifications that showcase my continuous
              learning journey and technical expertise.
            </p>
          </div>

          {/* Timeline-inspired layout */}
          <div className="relative" ref={containerRef}>
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-amber-500 to-violet-500 rounded-full"></div>

            {certificates.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={cert.id}
                  className={`relative mb-16 flex items-center ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } md:flex-row-reverse md:even:flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-5 h-5 rounded-full ${colorClasses.accent} border-4 border-slate-900`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isEven ? "pr-8 md:pr-0 md:pl-8" : "pl-8 md:pl-0 md:pr-8"
                    }`}
                  >
                    <Card
                      className={`bg-black/40 backdrop-blur-sm border ${colorClasses.border} hover:border-opacity-50 transition-colors cursor-pointer`}
                      onClick={() => handleCertClick(cert)}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div
                            className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border ${colorClasses.border}`}
                          >
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>

                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-1">
                              <Award
                                className={`h-4 w-4 ${colorClasses.text}`}
                              />
                              <h3 className="text-lg font-bold text-white">
                                {cert.title}
                              </h3>
                            </div>
                            <div className="text-sm text-gray-300">
                              <span className={colorClasses.text}>
                                {cert.issuer}
                              </span>{" "}
                              • {cert.date}
                            </div>
                            <div className="mt-2 text-xs text-gray-400">
                              Click to view details
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for certificate details */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <X size={24} />
            </button>

            <div className="p-6">
              <div className="relative w-full aspect-[3/2] mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedCert.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Issuer</p>
                    <p className="text-white">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="text-white">{selectedCert.date}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href={selectedCert.file} download className="flex-1">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition-opacity"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </a>
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-600 hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Verify</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;
