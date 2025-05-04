import { Link } from "@/i18n/navigation";
import { renderGreenHtml } from "@/lib/utils";
import { Snowflake, Sun, Wheat } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import AnimatedSection from "./animated-section";
import { Button } from "../ui/button";
const ProductsSection = () => {
  const t = useTranslations("HomePage.Products");
  type KeyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const products = Object.keys(messages.HomePage.Products.list).map((key) => {
    return {
      title: t(`list.${key}.title` as KeyType),
      href: t(`list.${key}.href` as KeyType),
      video: t(`list.${key}.video` as KeyType),
    };
  });
  const productIcons = [
    {
      icon: <Sun key={0} size={36} />,
    },
    { icon: <Snowflake key={1} size={36} /> },
    { icon: <Wheat key={2} size={36} /> },
  ];
  return (
    <AnimatedSection
      id="products"
      className="flex flex-col justify-center items-center gap-8 mx-auto mt-0 px-2 pt-4 border-0 container"
    >
      <h2
        className="font-bold text-xl md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{ __html: renderGreenHtml(t.raw("title")) }}
      />
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {products.map(({ title, href, video }, index) => (
          <div
            key={index}
            className="relative flex-1 px-8 py-4 border-2 border-primary-green rounded-lg min-w-[400px] h-[250px]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 opacity-70 rounded-lg w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="*:z-20 flex flex-col justify-center items-center gap-4 h-full">
              {productIcons[index].icon}
              <span className="font-semibold text-lg md:text-xl lg:text-2xl text-center">
                {title}
              </span>
              <Link href={href}>
                <Button variant={"green"} size={"sm"}>
                  {t("button")}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;
