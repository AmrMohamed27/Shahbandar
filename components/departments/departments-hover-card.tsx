import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useMessages, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ChartNoAxesCombined,
  ChevronDown,
  SearchCheck,
  Snowflake,
  UserRoundPen,
  Warehouse,
  Wheat,
} from "lucide-react";

interface Props {
  label: string;
  id: string;
}

const DepartmentsHoverCard = ({ label, id }: Props) => {
  const t = useTranslations("NavDepartments");
  type keyType = Parameters<typeof t>[0];
  const messages = useMessages().NavDepartments;
  const departments = Object.keys(messages).map((key) => ({
    label: t(`${key}.label` as keyType),
    href: t(`${key}.href` as keyType),
  }));
  const icons = [
    { icon: <Wheat key={0} size={16} className="text-primary-green" /> },
    {
      icon: <SearchCheck key={1} size={16} className="text-primary-green" />,
    },
    {
      icon: (
        <ChartNoAxesCombined key={2} size={16} className="text-primary-green" />
      ),
    },
    { icon: <Warehouse key={3} size={16} className="text-primary-green" /> },
    { icon: <Snowflake key={4} size={16} className="text-primary-green" /> },
    {
      icon: <UserRoundPen key={5} size={16} className="text-primary-green" />,
    },
  ];

  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer" asChild>
        <Link href={id} className="group flex flex-row items-center gap-2">
          <span>{label}</span>
          <ChevronDown
            size={10}
            className="group-data-[state=open]:rotate-180 transition duration-200"
          />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="bg-background">
        <ul className="flex flex-col gap-2">
          {departments.map(({ label, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="flex flex-row items-center gap-2 hover:underline"
              >
                {icons[index].icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default DepartmentsHoverCard;
