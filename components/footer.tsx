import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="flex justify-center items-center mt-4 px-2 py-4 border-primary-green border-t-2 dark:border-border text-center">
      {t("footerText")}
    </div>
  );
};

export default Footer;
