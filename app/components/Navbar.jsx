"use client"; // Ensure it's a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Certificate", path: "/certificate" },
          { name: "Projects", path: "/projects" },
        ].map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            className={`mx-1.5 sm:mx-6 border-b-2 ${
              pathname === path
                ? "border-blue-500 text-gray-800 dark:text-gray-200" // Active page
                : "border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
