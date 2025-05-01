import React from "react";
import AnimatedSection from "./animated-section";
import { renderBoldHtml, renderGreenHtml } from "@/lib/utils";
import { useTranslations } from "next-intl";
import MarqueeComponent from "../marquee";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

const ClientsSection = () => {
  const t = useTranslations("HomePage.Clients");
  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto container">
      <AnimatedSection
        id="clients"
        className="flex flex-col justify-center items-center gap-10 mx-auto px-2"
      >
        <h2
          className="font-bold text-xl md:text-3xl lg:text-5xl"
          dangerouslySetInnerHTML={{
            __html: renderGreenHtml(t.raw("title")),
          }}
        ></h2>
        <div className="flex flex-col items-center gap-2">
          <p
            className="lg:max-w-[60%] text-center"
            dangerouslySetInnerHTML={{
              __html: renderBoldHtml(t.raw("description")),
            }}
          ></p>
          <Link href="/clients">
            <Button variant={"green"}>{t("button")}</Button>
          </Link>
        </div>
      </AnimatedSection>
      <MarqueeComponent />
    </div>
  );
};

export default ClientsSection;
