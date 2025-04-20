import { renderHtml } from "@/lib/utils";
import { GoalsListText, ValuesListText, ValuesListTitle } from "@/types";
import {
  BadgeCheck,
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
import { useMessages, useTranslations } from "next-intl";
import AnimatedSection from "./animated-section";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

const AboutSection = () => {
  const t = useTranslations("HomePage");
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
  return (
    <AnimatedSection
      id="about"
      className="flex flex-col justify-center items-center gap-10 mx-auto px-2 pt-0 border-0 container"
      duration={0.8}
    >
      {/* About us */}
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2
          className="font-bold text-xl md:text-3xl lg:text-5xl"
          dangerouslySetInnerHTML={{
            __html: renderHtml(t.raw("About.title")),
          }}
        ></h2>
        <p className="lg:max-w-[60%]">{t("About.description")}</p>
        <Link href={"/about"}>
          <Button variant={"green"} size={"lg"}>
            {t("About.Button")}
          </Button>
        </Link>
      </div>

      {/* Our Goals */}
      <div className="flex flex-col justify-center items-center gap-6">
        <h2
          className="font-bold text-xl md:text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{
            __html: renderHtml(t.raw("About.Goals.title")),
          }}
        />
        <ul className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
          {Object.keys(goals).map((key) => (
            <li
              key={key}
              className="flex flex-col items-center gap-4 bg-primary-green dark:bg-primary-green-300 px-8 py-16 rounded-md text-white text-center basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/6"
            >
              {/* Icon */}
              {goalsIcons[parseInt(key) - 1].icon}
              {t(`About.Goals.list.${key}.text` as GoalsListText)}
            </li>
          ))}
        </ul>
      </div>

      {/* Our Values */}
      <div className="flex flex-col justify-center items-center gap-6 mx-auto container">
        <h2
          className="font-bold text-xl md:text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{
            __html: renderHtml(t.raw("About.Values.title")),
          }}
        />
        <ul className="flex flex-row flex-wrap justify-start items-start gap-y-2">
          {Object.keys(values).map((key) => (
            <li
              key={key}
              className="flex flex-row items-center gap-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              {/* Icon */}
              <div className="flex justify-center items-center p-2 border-2 border-primary-green rounded-full">
                {valuesIcons[parseInt(key) - 1].icon}
              </div>
              <div className="flex flex-col items-start text-start">
                <span className="font-semibold text-primary-green lg:text-lg">
                  {t(`About.Values.list.${key}.title` as ValuesListTitle)}
                </span>
                <span>
                  {t(`About.Values.list.${key}.text` as ValuesListText)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Our Slogan */}
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2
          className="font-bold text-xl md:text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{
            __html: renderHtml(t.raw("About.Slogan.title")),
          }}
        ></h2>
        <p className="font-semibold text-xl">{t("About.Slogan.text")}</p>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
