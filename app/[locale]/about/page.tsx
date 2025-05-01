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
          src={"/assets/images/about.jpeg"}
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
        {/* Paragraphs */}
        <AboutParagraphs />
        {/* Gallery */}
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
            {t("gallery")}
          </h2>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-[300px]"
              >
                <Image
                  src={`/assets/images/about/about (${index + 1}).jpeg`}
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
