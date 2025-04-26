import { useMessages, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import ProductPage from "./product-page";
import { renderBoldHtml } from "@/lib/utils";

type Props = {
  id: "summer" | "winter" | "seeds";
};

const ProductFetcher = ({ id }: Props) => {
  const t = useTranslations("HomePage.Products.list");
  type keyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const product = Object.keys(messages.HomePage.Products.list)
    .map((key) => {
      return {
        text: renderBoldHtml(t.raw(`${key}.text` as keyType)),
        image: t(`${key}.image` as keyType),
        title: t(`${key}.title` as keyType),
        href: t(`${key}.href` as keyType),
        id: t(`${key}.id` as keyType),
      };
    })
    .find((dep) => dep.id === id);
  if (!product) {
    notFound();
  }
  return <ProductPage product={product} />;
};

export default ProductFetcher;
