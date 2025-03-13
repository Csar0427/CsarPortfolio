"use client"; // Required for client-side event handling
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const router = useRouter();

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => navigateToNext(),
    onSwipedRight: () => navigateToPrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Define page order
  const pages = ["/", "/about", "/certificate", "/projects"];

  function navigateToNext() {
    const currentIndex = pages.indexOf(window.location.pathname);
    if (currentIndex < pages.length - 1) {
      router.push(pages[currentIndex + 1]);
    }
  }

  function navigateToPrev() {
    const currentIndex = pages.indexOf(window.location.pathname);
    if (currentIndex > 0) {
      router.push(pages[currentIndex - 1]);
    }
  }

  return (
    <html lang="en">
      <body
        {...handlers}
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
