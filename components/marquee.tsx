"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const logos = [
    { src: "/assets/images/company-logo-1.png", alt: "Lehaa Company" },
    {
      src: "/assets/images/company-logo-2.png",
      alt: "South of the Valley Company",
    },
    { src: "/assets/images/company-logo-3.png", alt: "Al-Baraka Company" },
    { src: "/assets/images/company-logo-4.png", alt: "El Baghdady Group" },
    { src: "/assets/images/company-logo-5.png", alt: "Green Seeds Company" },
    { src: "/assets/images/company-logo-6.png", alt: "El-Wadi Feed Company" },
  ];
  return (
    <div dir="ltr">
      <Marquee
        className="before:top-0 after:top-0 after:right-0 before:left-0 before:z-10 after:z-10 before:absolute after:absolute before:bg-gradient-to-r after:bg-gradient-to-l before:from-white after:from-white dark:before:from-zinc-950 dark:after:from-zinc-950 before:to-transparent after:to-transparent mx-auto before:w-10 after:w-10 max-w-[1200px] before:h-full after:h-full before:content-[''] after:content-[''] container"
        autoFill
        pauseOnHover
      >
        {logos.map(({ src, alt }, index) => (
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
            className="ml-8 md:ml-16 lg:ml-24 w-auto h-16 md:h-32 object-contain"
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
