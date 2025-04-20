import { useTranslations } from "next-intl";
import React from "react";
import AnimatedSection from "./animated-section";
import { renderHtml } from "@/lib/utils";
import { Mail, Notebook, Phone } from "lucide-react";
import ContactForm from "../contact-form";

const ContactSection = () => {
  const t = useTranslations("HomePage.Contact");
  return (
    <AnimatedSection
      id="contact"
      className="flex flex-col justify-center items-center gap-10 mx-auto px-2 container"
    >
      <h2
        className="font-bold text-xl md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{
          __html: renderHtml(t.raw("title")),
        }}
      ></h2>
      <div className="flex flex-row flex-wrap justify-between items-start gap-16 w-full">
        {/* Form */}
        <ContactForm />
        {/* Info */}
        <div className="flex flex-col gap-4">
          <p className="text-start">{t("description")}</p>
          {/* Phone */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <Phone size={16} />
              <span className="text-muted-foreground text-xl">
                {t("Phone.label")}
              </span>
            </div>
            <span dir="ltr">{t("Phone.value")}</span>
          </div>
          {/* Email */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <Mail size={16} />
              <span className="text-muted-foreground text-xl">
                {t("Email.label")}
              </span>
            </div>
            <span>{t("Email.value")}</span>
          </div>
          {/* Address */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <Notebook size={16} />
              <span className="text-muted-foreground text-xl">
                {t("Address.label")}
              </span>
            </div>
            <span>{t("Address.value")}</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
