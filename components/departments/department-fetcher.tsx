import {
  DepartmentsListHref,
  DepartmentsListId,
  DepartmentsListImage,
  DepartmentsListText,
  DepartmentsListTitle,
} from "@/types";
import { useMessages, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import DepartmentPage from "./department-page";

type Props = {
  id: "production" | "rnd" | "sales" | "silos" | "fridges" | "admin";
};

const DepartmentFetcher = ({ id }: Props) => {
  const t = useTranslations("HomePage.Departments.list");
  const messages = useMessages();
  const department = Object.keys(messages.HomePage.Departments.list)
    .map((key) => {
      return {
        text: t(`${key}.text` as DepartmentsListText),
        image: t(`${key}.image` as DepartmentsListImage),
        title: t(`${key}.title` as DepartmentsListTitle),
        href: t(`${key}.href` as DepartmentsListHref),
        id: t(`${key}.id` as DepartmentsListId),
      };
    })
    .find((dep) => dep.id === id);
  if (!department) {
    notFound();
  }
  return <DepartmentPage department={department} />;
};

export default DepartmentFetcher;
