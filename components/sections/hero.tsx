import React from "react";
import AnimatedSection from "../animated-section";
import { renderHtml } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative flex justify-center items-center h-96">
      {/* Title and subtitle */}
      <AnimatedSection className="z-20 border-0 text-center" id="home">
        <h1
          className="font-bold text-2xl md:text-3xl lg:text-7xl"
          dangerouslySetInnerHTML={{
            __html: renderHtml(t.raw("Hero.title")),
          }}
        ></h1>
        <p className="text-lg">{t("Hero.subtitle")}</p>
      </AnimatedSection>
      <Image
        src="/assets/images/hero.jpg"
        alt="Wheat field"
        width={800}
        height={500}
        className="top-0 left-0 absolute opacity-50 w-full h-96 object-cover"
      />
    </div>
  );
};

export default HeroSection;
