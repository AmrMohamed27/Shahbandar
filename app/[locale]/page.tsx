"use client";
import { GoalsListText, ValuesListText, ValuesListTitle } from "@/types";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Flag,
  HandHeart,
  Handshake,
  Leaf,
  Star,
  Users,
  Wheat,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  const messages = useMessages();
  const goals = messages.HomePage.About.Goals.list;
  const goalsIcons = [
    { icon: <Wheat key={0} size={32} /> },
    { icon: <Handshake key={1} size={32} /> },
    { icon: <Leaf key={2} size={32} /> },
    { icon: <HandHeart key={3} size={32} /> },
  ];
  const values = messages.HomePage.About.Values.list;
  const valuesIcons = [
    { icon: <BadgeCheck key={0} size={24} className="text-primary-green" /> },
    { icon: <Users key={1} size={24} className="text-primary-green" /> },
    { icon: <Star key={2} size={24} className="text-primary-green" /> },
    { icon: <Flag key={3} size={24} className="text-primary-green" /> },
  ];
  // Function to handle HTML in translation strings
  const renderHtml = (htmlString: string) => {
    return htmlString.replace(
      /<green>(.*?)<\/green>/g,
      '<span class="text-primary-green">$1</span>'
    );
  };
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center h-96">
        {/* Title and subtitle */}
        <motion.div
          className="z-20 text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1
            className="font-bold text-2xl md:text-3xl lg:text-7xl"
            dangerouslySetInnerHTML={{
              __html: renderHtml(t.raw("Hero.title")),
            }}
          ></h1>
          <p className="text-lg">{t("Hero.subtitle")}</p>
        </motion.div>
        <Image
          src="/assets/images/wheat.jpg"
          alt="Wheat field"
          width={800}
          height={500}
          className="top-0 left-0 absolute opacity-50 w-full h-96 object-cover"
        />
      </div>
      {/* About Section */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center gap-10 mx-auto px-2 container"
        id="about"
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
        </div>

        {/* Our Goals */}
        <div className="flex flex-col justify-center items-center gap-6">
          <h2
            className="font-bold text-xl md:text-3xl lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: renderHtml(t.raw("About.Goals.title")),
            }}
          />
          <ul className="flex flex-row flex-wrap justify-center gap-4">
            {Object.keys(goals).map((key) => (
              <li
                key={key}
                className="flex flex-col items-center gap-4 bg-primary-green dark:bg-primary-green-300 px-8 py-16 rounded-md text-white text-center basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
              >
                {/* Icon */}
                {goalsIcons.map(({ icon: Icon }, index) => {
                  if (index === parseInt(key) - 1) {
                    return Icon;
                  }
                })}
                {t(`About.Goals.list.${key}.text` as GoalsListText)}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Values */}
        <div className="flex flex-col justify-center items-center gap-6">
          <h2
            className="font-bold text-xl md:text-3xl lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: renderHtml(t.raw("About.Values.title")),
            }}
          />
          <ul className="flex flex-row flex-wrap justify-center gap-8">
            {Object.keys(values).map((key) => (
              <li
                key={key}
                className="flex flex-row items-center gap-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                {/* Icon */}
                <div className="flex justify-center items-center p-2 border-2 border-primary-green rounded-full">
                  {valuesIcons.map(({ icon: Icon }, index) => {
                    if (index === parseInt(key) - 1) {
                      return Icon;
                    }
                  })}
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
            className="font-bold text-xl md:text-3xl lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: renderHtml(t.raw("About.Slogan.title")),
            }}
          ></h2>
          <p className="font-semibold text-xl">{t("About.Slogan.text")}</p>
        </div>
      </motion.div>
    </div>
  );
}
