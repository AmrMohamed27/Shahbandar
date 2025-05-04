import { Link } from "@/i18n/navigation";
import { renderGreenHtml } from "@/lib/utils";
import { Mail, Notebook, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactForm from "../contact-form";
import AnimatedSection from "./animated-section";

const ContactSection = () => {
  const t = useTranslations("HomePage.Contact");
  return (
    <AnimatedSection
      id="contact"
      firstChild
      className="flex flex-col justify-center items-center gap-8 mx-auto px-2 container"
    >
      <h2
        className="font-bold md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{
          __html: renderGreenHtml(t.raw("title")),
        }}
      ></h2>
      <div className="flex flex-row flex-wrap justify-between items-start gap-16 w-full">
        {/* Form */}
        <ContactForm />
        {/* Info */}
        <div className="flex flex-col gap-4">
          <p className="text-start">{t("description")}</p>
          {/* Phone */}
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Phone size={16} />
              <span className="text-muted-foreground">{t("Phone.label")}</span>
            </div>
            <span dir="ltr">{t("Phone.value")}</span>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Phone size={16} />
              <span className="text-muted-foreground">{t("Phone2.label")}</span>
            </div>
            <span dir="ltr">{t("Phone2.value")}</span>
          </div>
          {/* Email */}
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Mail size={16} />
              <span className="text-muted-foreground">{t("Email.label")}</span>
            </div>
            <span>{t("Email.value")}</span>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Mail size={16} />
              <span className="text-muted-foreground">{t("Email2.label")}</span>
            </div>
            <span>{t("Email2.value")}</span>
          </div>
          {/* Address */}
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Notebook size={16} />
              <span className="text-muted-foreground">
                {t("Address.label")}
              </span>
            </div>
            <span>{t("Address.value")}</span>
          </div>
          {/* Social Media */}
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/assets/icons/facebook-dark.svg"}
                alt="facebook"
                width={16}
                height={16}
                className="not-dark:hidden"
              />
              <Image
                src={"/assets/icons/facebook-light.svg"}
                alt="facebook"
                width={16}
                height={16}
                className="dark:hidden"
              />
              <Link
                className="hover:underline"
                href={t("socialMedia.link")}
                target="_blank"
              >
                {t("socialMedia.label")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
