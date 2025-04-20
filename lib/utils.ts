import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to handle HTML in translation strings
export const renderHtml = (htmlString: string) => {
  return htmlString.replace(
    /<green>(.*?)<\/green>/g,
    '<span class="text-primary-green">$1</span>'
  );
};
