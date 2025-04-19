import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahbandar",
  description: "A marketplace for agricultural tools and goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
