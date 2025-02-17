import { Facebook, Youtube, PuzzleIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1C2333] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <PuzzleIcon className="h-5 w-5 text-white" />
            <p className="text-sm text-white">
              Copyright © 2025 - All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Discord"
            >
              <PuzzleIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
