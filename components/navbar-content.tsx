import { Link } from "@/i18n/navigation";
import { NavLink } from "@/types";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import AuthButtons from "./auth-buttons";
import ChangeLanguage from "./change-language";
import { DarkModeToggle } from "./dark-mode-toggle";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";

const NavbarContent = () => {
  const [isClient, setIsClient] = useState(false);

  const { NavLinks } = useMessages();
  const t = useTranslations("NavLinks");

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center mx-auto p-4 container">
      {/* Logo */}
      <Link href="/">
        <Image
          src={"/assets/images/logo-green.png"}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden lg:flex flex-row items-center gap-6 text-lg">
        {Object.keys(NavLinks).map((key) => (
          <li key={key}>
            <Link href={`#${key}`}>{t(key as NavLink)}</Link>
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
