import { Link } from "@/i18n/navigation";
import {
  ChartNoAxesCombined,
  SearchCheck,
  Snowflake,
  UserRoundPen,
  Warehouse,
  Wheat,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import { Separator } from "../ui/separator";

export function DepartmentsList() {
  const t = useTranslations("HomePage.Departments.list");
  type KeyType = Parameters<typeof t>[0];
  const messages = useMessages();
  const departments = Object.keys(messages.HomePage.Departments.list).map(
    (key) => {
      return {
        text: t(`${key}.text` as KeyType),
        image: t(`${key}.image` as KeyType),
        title: t(`${key}.title` as KeyType),
        href: t(`${key}.href` as KeyType),
      };
    }
  );
  const icons = [
    { icon: <Wheat key={0} size={24} className="text-primary-green" /> },
    { icon: <SearchCheck key={1} size={24} className="text-primary-green" /> },
    {
      icon: (
        <ChartNoAxesCombined key={2} size={24} className="text-primary-green" />
      ),
    },
    { icon: <Warehouse key={3} size={24} className="text-primary-green" /> },
    { icon: <Snowflake key={4} size={24} className="text-primary-green" /> },
    { icon: <UserRoundPen key={5} size={24} className="text-primary-green" /> },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-start gap-4">
      {departments.map(({ title, href }, index) => (
        <div key={index} className="flex flex-row gap-4">
          <Link
            className="flex flex-row items-center gap-2 hover:underline"
            href={href}
          >
            {icons[index].icon}
            <div>{title}</div>
          </Link>
          {index < departments.length - 1 && (
            <Separator orientation="vertical" />
          )}
        </div>
      ))}
    </div>
  );
}
