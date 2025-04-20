import { cn, renderHtml } from "@/lib/utils";
import { ProductsListText } from "@/types";
import { useMessages, useTranslations } from "next-intl";
import AnimatedSection from "../animated-section";
import { Snowflake, Sun, Wheat } from "lucide-react";

const ProductsSection = () => {
  const t = useTranslations("HomePage.Products");
  const messages = useMessages();
  const products = Object.keys(messages.HomePage.Products.list).map((key) => {
    return {
      text: t(`list.${key}.text` as ProductsListText),
    };
  });
  const productIcons = [
    {
      icon: <Sun key={0} size={36} className="text-primary-green" />,
    },
    { icon: <Snowflake key={1} size={36} /> },
    { icon: <Wheat key={2} size={36} className="text-primary-green" /> },
  ];
  return (
    <AnimatedSection
      id="products"
      className="flex flex-col justify-center items-center gap-10 mx-auto px-2 container"
    >
      <h2
        className="font-bold text-xl md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{ __html: renderHtml(t.raw("title")) }}
      />
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {products.map(({ text }, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col justify-center items-center gap-4 px-8 py-4 rounded-lg w-full",
              index % 2 === 1
                ? "bg-primary-green dark:bg-primary-green-300 text-white"
                : "border-2 border-primary-green text-primary-green"
            )}
          >
            {productIcons[index].icon}
            <span className="font-semibold text-lg md:text-xl lg:text-2xl text-center">
              {text}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;
