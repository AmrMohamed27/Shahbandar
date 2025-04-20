import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { DepartmentsListImage, DepartmentsListText } from "@/types";
import Image from "next/image";
import { getLangDir } from "rtl-detect";

export function DepartmentsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const t = useTranslations("HomePage.Departments.list");
  const messages = useMessages();
  const departments = Object.keys(messages.HomePage.Departments.list).map(
    (key) => {
      return {
        text: t(`${key}.text` as DepartmentsListText),
        image: t(`${key}.image` as DepartmentsListImage),
      };
    }
  );
    const locale = useLocale();
    const direction = getLangDir(locale);
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs md:max-w-lg lg:max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      dir={"ltr"}
    >
      <CarouselContent>
        {departments.map(({ text, image }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card dir={direction}>
                <CardHeader>
                  <span className="z-10 stroke-3 font-semibold text-primary-green text-lg md:text-xl lg:text-3xl">
                    {text}
                  </span>
                </CardHeader>
                <CardContent className="relative flex justify-center items-center p-6 aspect-square">
                  <Image src={image} alt={text} fill className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
