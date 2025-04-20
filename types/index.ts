export type NavLink =
  | "about"
  | "home"
  | "products"
  | "clients"
  | "contact"
  | "departments";

export type GoalsListText =
  | "About.Goals.list.1.text"
  | "About.Goals.list.2.text"
  | "About.Goals.list.3.text"
  | "About.Goals.list.4.text"
  | "About.Goals.list.5.text";

export type ValuesListText =
  | "About.Values.list.1.text"
  | "About.Values.list.2.text"
  | "About.Values.list.3.text"
  | "About.Values.list.4.text"
  | "About.Values.list.5.text";
export type ValuesListTitle =
  | "About.Values.list.1.title"
  | "About.Values.list.2.title"
  | "About.Values.list.3.title"
  | "About.Values.list.4.title"
  | "About.Values.list.5.title";

export type DepartmentsListText =
  | "1.text"
  | "2.text"
  | "3.text"
  | "4.text"
  | "5.text"
  | "6.text";
export type DepartmentsListId =
  | "1.id"
  | "2.id"
  | "3.id"
  | "4.id"
  | "5.id"
  | "6.id";
export type DepartmentsListTitle =
  | "1.title"
  | "2.title"
  | "3.title"
  | "4.title"
  | "5.title"
  | "6.title";
export type DepartmentsListImage =
  | "1.image"
  | "2.image"
  | "3.image"
  | "4.image"
  | "5.image"
  | "6.image";
export type DepartmentsListHref =
  | "1.href"
  | "2.href"
  | "3.href"
  | "4.href"
  | "5.href"
  | "6.href";

export interface DepartmentObject {
  text: string;
  image: string;
  title: string;
  href: string;
  id: string;
}

export type ProductsListText = "list.2.text" | "list.3.text" | "list.1.text";

export type AboutPageParagraphs =
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7"
  | "p8"
  | "p9";
