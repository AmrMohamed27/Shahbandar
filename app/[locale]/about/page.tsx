import AboutParagraphs from "@/components/about-paragraphs";
import AnimatedSection from "@/components/sections/animated-section";
import { renderHtml } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col gap-10">
      <AnimatedSection className="flex flex-col items-center gap-10 mt-4 pt-0 border-0">
        <h1
          className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          dangerouslySetInnerHTML={{ __html: renderHtml(t.raw("h1")) }}
        />
        <AboutParagraphs />
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
