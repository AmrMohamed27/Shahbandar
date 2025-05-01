"use client";
import AnimatedSection from "@/components/sections/animated-section";
import { Separator } from "@/components/ui/separator";
import { renderBoldHtml, renderGreenHtml } from "@/lib/utils";
import { Layers, MapPin } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ClientsPage = () => {
  const t = useTranslations("HomePage.Clients");
  const messages = useMessages();
  type keyType = Parameters<typeof t>[0];
  const clients = messages.HomePage.Clients.list;
  const companiesSublist = messages.HomePage.Clients.sublist;

  return (
    <div className="mx-auto px-2 container">
      <AnimatedSection
        className="flex flex-col items-center gap-10 mt-4 pt-0 border-0"
        firstChild
      >
        {/* Image */}
        <div className="relative flex justify-center items-center w-full h-96">
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
              dangerouslySetInnerHTML={{
                __html: renderGreenHtml(t.raw("title")),
              }}
            />
          </motion.div>
          <Image
            src={"/assets/images/clients.jpeg"}
            alt={"clients"}
            width={1000}
            height={100}
            className="top-0 left-0 absolute opacity-90 dark:opacity-50 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          {Object.keys(clients).map((key, index) => (
            <div
              className="flex flex-col gap-4"
              id={t(`list.${key}.id` as keyType)}
              key={index}
            >
              <div className="flex flex-col gap-0">
                <div className="flex flex-row items-center gap-2">
                  <Layers className="text-primary-green shrink-0" size={16} />
                  <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                    {t(`list.${key}.title` as keyType)}
                  </h2>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: renderBoldHtml(
                      t.raw(`list.${key}.text` as keyType)
                    ),
                  }}
                ></p>
              </div>
              {key === "2" && (
                <div className="flex flex-col gap-2">
                  {Object.keys(companiesSublist).map((key, index) => {
                    const companies: string[] = [];
                    for (let i = 1; i <= 8; i++) {
                      if (!t.has(`sublist.${key}.c${i}` as keyType)) {
                        break;
                      }
                      companies.push(t(`sublist.${key}.c${i}` as keyType));
                    }
                    return (
                      <div
                        key={index}
                        className="flex flex-row flex-wrap gap-2"
                      >
                        <div className="flex flex-row items-center gap-2">
                          <MapPin
                            className="text-primary-green shrink-0"
                            size={16}
                          />
                          <h3 className="font-semibold md:text-lg">
                            {t(`sublist.${key}.location` as keyType)}:
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
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ClientsPage;
