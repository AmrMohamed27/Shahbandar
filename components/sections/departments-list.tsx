import {
  DepartmentsListHref,
  DepartmentsListImage,
  DepartmentsListText,
  DepartmentsListTitle,
} from "@/types";
import {
  ChartNoAxesCombined,
  SearchCheck,
  Snowflake,
  UserRoundPen,
  Warehouse,
  Wheat,
} from "lucide-react";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Separator } from "../ui/separator";

export function DepartmentsList() {
  const t = useTranslations("HomePage.Departments.list");
  const messages = useMessages();
  const departments = Object.keys(messages.HomePage.Departments.list).map(
    (key) => {
      return {
        text: t(`${key}.text` as DepartmentsListText),
        image: t(`${key}.image` as DepartmentsListImage),
        title: t(`${key}.title` as DepartmentsListTitle),
        href: t(`${key}.href` as DepartmentsListHref),
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
    <div className="flex flex-row flex-wrap justify-center gap-4">
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
