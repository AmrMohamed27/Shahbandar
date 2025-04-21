"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  duration?: number;
  opacity?: number;
};

const AnimatedSection = ({
  children,
  className,
  id,
  duration = 0.5,
  opacity = 1,
}: Props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity }}
      viewport={{ once: true }}
      transition={{ duration, ease: "easeInOut" }}
      className={cn("border-t-2 pt-12 px-2 sm:px-4 md:px-8 mt-8", className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
