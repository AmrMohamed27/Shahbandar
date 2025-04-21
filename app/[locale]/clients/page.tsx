import AnimatedSection from "@/components/sections/animated-section";
import { Separator } from "@/components/ui/separator";
import { renderHtml } from "@/lib/utils";
import { Layers, MapPin } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import React from "react";

const ClientsPage = () => {
  const t = useTranslations("HomePage.Clients");
  const messages = useMessages();
  type keyType = Parameters<typeof t>[0];
  const clientMessages = messages.HomePage.Clients.list;
  const clientSublist = messages.HomePage.Clients.sublist;

  return (
    <div className="mx-auto px-2 container">
      <AnimatedSection className="flex flex-col items-center gap-10 mt-4 pt-0 border-0">
        <h1
          className="font-bold text-xl md:text-3xl lg:text-5xl"
          dangerouslySetInnerHTML={{ __html: renderHtml(t.raw("title")) }}
        />
        <div className="flex flex-col gap-4">
          {Object.keys(clientMessages).map((key, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row items-center gap-2">
                <Layers className="text-primary-green" size={16} />
                <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
                  {t(`list.${key}.title` as keyType)}
                </h2>
              </div>
              <p>{t(`list.${key}.text` as keyType)}</p>
              {key === "2" && (
                <div className="flex flex-col gap-4">
                  {Object.keys(clientSublist).map((key, index) => {
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
                          <MapPin className="text-primary-green" size={16} />
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
            </React.Fragment>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ClientsPage;
