"use client";
import { getUserLocale, setUserLocale } from "@/actions/locale";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, locales } from "@/i18n/config";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ChangeLanguage = () => {
  const [lang, setLang] = useState<Locale>("en");

  useEffect(() => {
    const getStoredLocale = async () => {
      const locale = await getUserLocale();
      setLang(locale);
    };
    getStoredLocale();
  }, []);

  const handleChangeLang = async (value: string) => {
    const locale = value as Locale;
    setLang(locale);
    await setUserLocale(locale);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-end gap-2" variant={"outline"}>
          <span>{lang}</span>
          <ChevronDown size={10} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={lang} onValueChange={handleChangeLang}>
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {locale}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeLanguage;
