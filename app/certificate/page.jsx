import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

const page = () => {
  const certificates = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      issuer: "freeCodeCamp",
      date: "January 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },
    {
      id: 2,
      title: "React Development",
      issuer: "Meta",
      date: "February 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },
    {
      id: 3,
      title: "JavaScript Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },

    {
      id: 4,
      title: "JavaScript Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },

    {
      id: 5,
      title: "JavaScript Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },

    {
      id: 6,
      title: "JavaScript Algorithms",
      issuer: "Coursera",
      date: "March 2024",
      image: "/placeholder.svg?height=200&width=300",
      downloadUrl: "#",
      verifyUrl: "#",
    },
    // Add more certificates as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <h1 className="text-4xl font-bold text-center text-white mb-16">
        Certificates
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            className="bg-zinc-900 border-zinc-800 text-white"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {cert.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-md">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-400">
                  Issued by: {cert.issuer}
                </p>
                <p className="text-sm text-gray-400">Date: {cert.date}</p>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent border-white hover:bg-white hover:text-black"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent border-white hover:bg-white hover:text-black"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Verify
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
