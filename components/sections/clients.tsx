import React from "react";
import AnimatedSection from "./animated-section";
import { renderHtml } from "@/lib/utils";
import { useTranslations } from "next-intl";

const ClientsSection = () => {
  const t = useTranslations("HomePage.Clients");
  return (
    <AnimatedSection
      id="clients"
      className="flex flex-col justify-center items-center gap-10 mx-auto px-2 container"
    >
      <h2
        className="font-bold text-xl md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{
          __html: renderHtml(t.raw("title")),
        }}
      ></h2>
      <p className="lg:max-w-[60%] text-center">{t("description")}</p>
      <div className="flex flex-row flex-wrap gap-4">
        <span className="text-muted-foreground text-xl">
          Company Logos Placeholder
        </span>
        <span className="text-muted-foreground text-xl">
          Company Logos Placeholder
        </span>
        <span className="text-muted-foreground text-xl">
          Company Logos Placeholder
        </span>
        <span className="text-muted-foreground text-xl">
          Company Logos Placeholder
        </span>
      </div>
    </AnimatedSection>
  );
};

export default ClientsSection;
