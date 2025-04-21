"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { MenuIcon } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import AuthButtons from "./auth-buttons";

interface Props {
  isClient: boolean;
}

const MobileMenu = ({ isClient }: Props) => {
  const { NavLinks } = useMessages();
  const t = useTranslations("NavLinks");
  type keyType = Parameters<typeof t>[0];
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((open) => !open);
  };
  return (
    <Sheet open={open} onOpenChange={toggleOpen}>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image
                src={"/assets/images/logo-green.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 px-4 py-2">
          {/* Nav Links */}
          <ul className="flex flex-col gap-2 text-lg">
            {Object.keys(NavLinks).map((key) => (
              <li
                key={key}
                className="hover:bg-muted px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <Link href={`/#${key}`}>{t(key as keyType)}</Link>
              </li>
            ))}
          </ul>
          {/* Auth Buttons */}
          <AuthButtons isClient={isClient} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
