import { useMessages, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import DepartmentPage from "./department-page";

type Props = {
  id: "production" | "rnd" | "sales" | "silos" | "fridges" | "admin";
};

const DepartmentFetcher = ({ id }: Props) => {
  const t = useTranslations("HomePage.Departments.list");
  type keyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const department = Object.keys(messages.HomePage.Departments.list)
    .map((key) => {
      return {
        text: t(`${key}.text` as keyType),
        image: t(`${key}.image` as keyType),
        title: t(`${key}.title` as keyType),
        href: t(`${key}.href` as keyType),
        id: t(`${key}.id` as keyType),
      };
    })
    .find((dep) => dep.id === id);
  if (!department) {
    notFound();
  }
  return <DepartmentPage department={department} />;
};

export default DepartmentFetcher;
