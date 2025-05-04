"use client";
import AnimatedSection from "@/components/sections/animated-section";
import HeroImageTemplate from "@/components/sections/hero-image-template";
import { Separator } from "@/components/ui/separator";
import { renderBoldHtml } from "@/lib/utils";
import { Layers, MapPin } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import React from "react";

const ClientsPage = () => {
  const t = useTranslations("HomePage.Clients");
  const messages = useMessages();
  type KeyType = Parameters<typeof t>[0];
  const clients = messages.HomePage.Clients.list;
  const companiesSublist = messages.HomePage.Clients.sublist;

  return (
    <div className="flex flex-col gap-8">
      {/* Image */}
      <HeroImageTemplate
        title={t.raw("title")}
        imageSrc={"/assets/images/clients.jpeg"}
      />
      <AnimatedSection
        firstChild
        className="flex flex-col gap-4 mt-0 pt-0 border-0"
      >
        {Object.keys(clients).map((key, index) => (
          <div
            className="flex flex-col gap-4"
            id={t(`list.${key}.id` as KeyType)}
            key={index}
          >
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center gap-2">
                <Layers className="text-primary-green shrink-0" size={16} />
                <h3 className={`font-semibold text-lg md:text-xl lg:text-2xl`}>
                  {t(`list.${key}.title` as KeyType)}
                </h3>
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: renderBoldHtml(t.raw(`list.${key}.text` as KeyType)),
                }}
              ></p>
            </div>
            {key === "2" && (
              <div className="flex flex-col gap-2">
                {Object.keys(companiesSublist).map((key, index) => {
                  const companies: string[] = [];
                  for (let i = 1; i <= 8; i++) {
                    if (!t.has(`sublist.${key}.c${i}` as KeyType)) {
                      break;
                    }
                    companies.push(t(`sublist.${key}.c${i}` as KeyType));
                  }
                  return (
                    <div
                      key={index}
                      className="flex flex-row flex-wrap gap-2 md:px-4"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <MapPin
                          className="text-primary-green shrink-0"
                          size={16}
                        />
                        <h3 className={`font-semibold md:text-lg `}>
                          {t(`sublist.${key}.location` as KeyType)}:
                        </h3>
                      </div>
                      <div className="flex flex-row flex-wrap items-center gap-2">
                        {companies.map((company, index) => (
                          <React.Fragment key={index}>
                            <span>{company}</span>
                            {index < companies.length - 1 && (
                              <Separator
                                orientation="vertical"
                                className="max-h-4"
                              />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
};

export default ClientsPage;
