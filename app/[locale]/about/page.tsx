"use client";
import AboutParagraphs from "@/components/about-paragraphs";
import AnimatedSection from "@/components/sections/animated-section";
import { renderGreenHtml } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col gap-2">
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
          <h1
            className="font-bold text-2xl md:text-3xl lg:text-7xl"
            dangerouslySetInnerHTML={{ __html: renderGreenHtml(t.raw("h1")) }}
          ></h1>
        </motion.div>
        <Image
          src={"/assets/images/about.jpg"}
          alt={"about"}
          width={1000}
          height={100}
          className="top-0 left-0 absolute opacity-90 dark:opacity-50 w-full h-full object-cover"
        />
      </div>
      <AnimatedSection
        className="flex flex-col items-center gap-10 pt-0 pb-4 border-0"
        firstChild
      >
        <AboutParagraphs />
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
