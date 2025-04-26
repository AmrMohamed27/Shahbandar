import { cn, renderGreenHtml } from "@/lib/utils";
import { Snowflake, Sun, Wheat } from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import AnimatedSection from "./animated-section";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
const ProductsSection = () => {
  const t = useTranslations("HomePage.Products");
  type keyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const products = Object.keys(messages.HomePage.Products.list).map((key) => {
    return {
      title: t(`list.${key}.title` as keyType),
      href: t(`list.${key}.href` as keyType),
      image: t(`list.${key}.image` as keyType),
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
      className="flex flex-col justify-center items-center gap-10 mx-auto px-2 container"
    >
      <h2
        className="font-bold text-xl md:text-3xl lg:text-5xl"
        dangerouslySetInnerHTML={{ __html: renderGreenHtml(t.raw("title")) }}
      />
      <div className="flex flex-row flex-wrap justify-center items-center gap-8">
        {products.map(({ title, href, image }, index) => (
          <Link
            href={href}
            key={index}
            className={cn(
              "px-8 py-4 rounded-lg min-w-[300px] flex-1 relative",
              "border-2 border-primary-green "
            )}
          >
            <Image
              src={image}
              alt={title}
              width={1920}
              height={1080}
              className="absolute inset-0 opacity-70 rounded-lg w-full h-full object-cover"
            />
            <div className="*:z-50 flex flex-col justify-center items-center gap-4">
              {productIcons[index].icon}
              <span className="font-semibold text-lg md:text-xl lg:text-2xl text-center">
                {title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;
