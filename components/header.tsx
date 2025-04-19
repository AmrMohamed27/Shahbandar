"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavbarContent from "./navbar-content";

const Header = () => {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;

      if (window.scrollY > scrollThreshold && !scrolledPast) {
        setScrolledPast(true);
      } else if (window.scrollY <= scrollThreshold && scrolledPast) {
        setScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledPast]);

  return (
    <div className="h-16">
      <AnimatePresence>
        {/* When scrolledPast is true, show this fixed header */}
        {scrolledPast && (
          <motion.div
            className="top-0 right-0 left-0 z-50 fixed bg-background/95 shadow-md backdrop-blur-sm border-b-2 border-black"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <NavbarContent />
          </motion.div>
        )}
      </AnimatePresence>
      {/* This is the initial absolute header that's always present when not scrolled */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 z-40",
          scrolledPast ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <NavbarContent />
      </div>
    </div>
  );
};

export default Header;
