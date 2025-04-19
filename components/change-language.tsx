"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { Button } from "./ui/button";
import { languages } from "@/constants";

const ChangeLanguage = () => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLang = async (value: string) => {
    const locale = value as Locale;
    router.replace(pathname, { locale });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2" variant={"outline"}>
          <span>{currentLocale}</span>
          <ChevronDown size={10} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={handleChangeLang}
        >
          {languages.map(({ id, name }) => (
            <DropdownMenuRadioItem key={id} value={id}>
              {name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLanguage;
