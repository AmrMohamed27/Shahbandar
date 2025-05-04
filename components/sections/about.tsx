import { Link } from "@/i18n/navigation";
import { cn, renderBoldHtml, renderGreenHtml } from "@/lib/utils";
import {
  BadgeCheck,
  CheckCheck,
  FlaskConical,
  Globe,
  Leaf,
  Plane,
  Sprout,
  Tractor,
  TrendingUp,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import { getLangDir } from "rtl-detect";
import { Button } from "../ui/button";
import AnimatedSection from "./animated-section";

const AboutSection = () => {
  const t = useTranslations("HomePage");
  type KeyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const goals = messages.HomePage.About.Goals.list;
  const goalsIcons = [
    { icon: <Sprout key={0} size={32} /> },
    { icon: <Globe key={1} size={32} /> },
    { icon: <Leaf key={2} size={32} /> },
    { icon: <TrendingUp key={3} size={32} /> },
    { icon: <Tractor key={4} size={32} /> },
  ];
  const values = messages.HomePage.About.Values.list;
  const valuesIcons = [
    {
      icon: <BadgeCheck key={0} size={24} className="text-primary-green" />,
    },
    { icon: <FlaskConical key={1} size={24} className="text-primary-green" /> },
    {
      icon: <UserRoundPlus key={2} size={24} className="text-primary-green" />,
    },
    { icon: <Plane key={3} size={24} className="text-primary-green" /> },
    { icon: <UsersRound key={4} size={24} className="text-primary-green" /> },
  ];
  const logoSublist = messages.HomePage.About.Vision.sublist;
  const locale = useLocale();
  const dir = getLangDir(locale);
  return (
    <AnimatedSection
      id="about"
      className="flex flex-col justify-center items-center gap-8 mx-auto px-2 pt-0 border-0 container"
      duration={0.8}
    >
      {/* About us */}
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h2
            className={cn(
              "font-bold text-xl md:text-3xl lg:text-5xl",
              locale === "ar" ? "" : ""
            )}
            dangerouslySetInnerHTML={{
              __html: renderGreenHtml(t.raw("About.title")),
            }}
          ></h2>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={500}
            height={500}
            className={"h-auto  max-w-[150px]"}
          />
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: renderBoldHtml(t.raw("About.description")),
            }}
          ></p>
          <Link href={"/about"}>
            <Button variant={"green"} size={"lg"}>
              {t("About.Button")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Our Goals */}
      <div className="flex flex-col justify-center items-center gap-6">
        <h2
          className={cn(
            "font-bold text-xl md:text-2xl lg:text-3xl",
            locale === "ar" ? "" : ""
          )}
          dangerouslySetInnerHTML={{
            __html: renderGreenHtml(t.raw("About.Goals.title")),
          }}
        />
        <ul className="flex flex-row flex-wrap justify-between gap-x-4 gap-y-4">
          {Object.keys(goals).map((key) => (
            <li
              key={key}
              className="flex flex-col flex-1 items-center gap-4 bg-primary-green dark:bg-primary-green-300 px-8 py-16 rounded-md text-white text-center basis-full md:basis-1/3 xl:basis-1/6"
            >
              {/* Icon */}
              {goalsIcons[parseInt(key) - 1].icon}
              {t(`About.Goals.list.${key}.text` as KeyType)}
            </li>
          ))}
        </ul>
      </div>

      {/* Our Values */}
      <div className="flex flex-col justify-center items-center gap-6 mx-auto container">
        <h2
          className={cn(
            "font-bold text-xl md:text-2xl lg:text-3xl",
            locale === "ar" ? "" : ""
          )}
          dangerouslySetInnerHTML={{
            __html: renderGreenHtml(t.raw("About.Values.title")),
          }}
        />
        <ul className="flex flex-row flex-wrap justify-start items-start gap-y-2">
          {Object.keys(values).map((key) => (
            <li
              key={key}
              className="flex flex-row items-start gap-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              {/* Icon */}
              <div className="flex justify-center items-start p-2 border-2 border-primary-green rounded-full">
                {valuesIcons[parseInt(key) - 1].icon}
              </div>
              <div className="flex flex-col items-start text-start">
                <span className="font-semibold text-primary-green lg:text-lg">
                  {t(`About.Values.list.${key}.title` as KeyType)}
                </span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: renderBoldHtml(
                      t.raw(`About.Values.list.${key}.text` as KeyType)
                    ),
                  }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Vision */}
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2
          className={cn(
            "font-bold text-xl md:text-2xl lg:text-3xl",
            locale === "ar" ? "" : ""
          )}
          dangerouslySetInnerHTML={{
            __html: renderGreenHtml(t.raw("About.Vision.title")),
          }}
        ></h2>
        <div className="flex xl:flex-row flex-col items-center gap-4" dir="ltr">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={500}
            height={500}
          />
          <div className="flex flex-col gap-2 text-start" dir={dir}>
            {Object.keys(logoSublist).map((key) => (
              <div key={key} className="flex flex-row gap-2">
                <CheckCheck
                  className="mt-1 text-primary-green shrink-0"
                  size={16}
                />
                <span
                  dangerouslySetInnerHTML={{
                    __html: renderBoldHtml(
                      t.raw(`About.Vision.sublist.${key}` as KeyType)
                    ),
                  }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
