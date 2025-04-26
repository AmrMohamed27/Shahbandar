"use client";
import { DepartmentObject } from "@/types";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  department: DepartmentObject;
};

const DepartmentPage = ({ department }: Props) => {
  // Destructure department object
  const { text, image, title } = department;
  const sentences = text
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className="flex flex-col gap-10">
      {/* Image */}
      <div className="relative flex justify-center items-center h-96">
        {/* Title */}
        <motion.div
          className="z-20 mt-0 px-2 sm:px-4 md:px-8 pt-0 border-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="home"
        >
          <h1 className="font-bold text-2xl md:text-3xl lg:text-7xl">
            {title}
          </h1>
        </motion.div>
        <Image
          src={image}
          alt={title}
          width={1000}
          height={100}
          className="top-0 left-0 absolute opacity-80 dark:opacity-50 w-full h-full object-cover"
        />
      </div>
      {/* Text */}
      <motion.div
        className="mt-0 px-2 sm:px-4 md:px-8 pt-0 border-0"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="flex flex-col gap-2">
          {sentences.map((s, i) => (
            <li key={i} className="flex flex-row gap-2">
              <Check className="text-primary-green shrink-0" size={16} />
              <span>
                {s}.
                <br />
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default DepartmentPage;
