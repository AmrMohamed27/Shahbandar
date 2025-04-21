import { Link } from "@/i18n/navigation";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import AuthButtons from "./auth-buttons";
import ChangeLanguage from "./change-language";
import { DarkModeToggle } from "./dark-mode-toggle";
import MobileMenu from "./mobile-menu";

const NavbarContent = () => {
  const [isClient, setIsClient] = useState(false);

  const { NavLinks } = useMessages();
  const t = useTranslations("NavLinks");
  type keyType = Parameters<typeof t>[0];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center mx-auto px-2 sm:px-4 md:px-8 lg:px-8 py-4 container">
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/assets/images/original-logo-green.png"}
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-auto"
        />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex flex-row items-center gap-6 text-lg">
        {Object.keys(NavLinks).map((key) => (
          <li key={key}>
            <Link href={`/#${key}`}>{t(key as keyType)}</Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex flex-row items-center gap-4">
        <DarkModeToggle />
        <ChangeLanguage />
        {/* Desktop Auth stuff */}
        <div className="max-lg:hidden">
          <AuthButtons isClient={isClient} />
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <MobileMenu isClient={isClient} />
        </div>
      </div>
    </div>
  );
};

export default NavbarContent;
