"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }) => {
  const pathname = usePathname(); // Ensure it's in a client component

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensure animations re-run when route changes
        initial={{ opacity: 0, x: 100 }} // Start off-screen
        animate={{ opacity: 1, x: 0 }} // Slide in
        exit={{ opacity: 0, x: -100 }} // Slide out smoothly
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
