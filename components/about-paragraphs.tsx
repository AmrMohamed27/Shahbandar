import { useMessages, useTranslations } from "next-intl";

const AboutParagraphs = () => {
  const messages = useMessages();
  const paragraphsObject = messages.AboutPage.brief;
  const t = useTranslations("AboutPage.brief");
  type keyType = Parameters<typeof t>[0];
  const paragraphs = Object.keys(paragraphsObject).map((key) =>
    t(key as keyType)
  );
  return (
    <div className="flex flex-col">
      {paragraphs.map((text, index) => (
        <p key={index} className="[&:not(:first-child)]:mt-6 leading-7">
          {text}
        </p>
      ))}
    </div>
  );
};

export default AboutParagraphs;
