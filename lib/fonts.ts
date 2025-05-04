import { Raleway } from "next/font/google";
import LocalFont from "next/font/local";

export const latin_secondary_font = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const arabic_font = LocalFont({
  src: [
    {
      path: "./fonts/gumela-arabic-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gumela-arabic-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/gumela-arabic-light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gumela",
});

export const header_font = LocalFont({
  src: [
    {
      path: "./fonts/Foda.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-foda",
});
