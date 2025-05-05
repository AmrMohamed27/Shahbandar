"use client";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

export const Feature = ({
  text,
  icon,
  index,
}: {
  text: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const locale = useLocale();
  const direction = getLangDir(locale);
  return (
    <div
      className={cn(
        "flex flex-col max-lg:border max-md:rounded-lg py-10 relative group/feature dark:border-primary-green text-center",
        direction === "ltr" ? "lg:border-r" : "lg:border-l",
        (index === 0 || index === 4) && direction === "ltr"
          ? "lg:border-l dark:border-primary-green"
          : "lg:border-r dark:border-primary-green",
        index <= 4 && "lg:border-b dark:border-primary-green"
      )}
    >
      {index < 4 && (
        <div className="max-md:hidden absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-primary-green-400 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="max-md:hidden absolute inset-0 bg-gradient-to-b from-neutral-100 dark:from-primary-green-400 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none" />
      )}
      <div className="z-10 relative flex flex-col items-center mb-4 px-10 w-full text-primary-green">
        {icon}
      </div>
      <div className="z-10 relative mb-2 px-10 font-bold text-lg">
        <div className="left-0 absolute inset-y-0 bg-neutral-300 dark:bg-primary-green group-hover/feature:bg-primary-green rounded-tr-full rounded-br-full w-1 h-6 group-hover/feature:h-8 origin-center transition-all duration-200" />
      </div>
      <p className="z-10 relative px-10 max-w-xs text-neutral-600 dark:text-neutral-300 text-sm">
        {text}
      </p>
    </div>
  );
};
